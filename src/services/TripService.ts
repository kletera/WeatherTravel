import { ref, push, remove, onValue, type Unsubscribe } from "firebase/database";
import { database } from "../firebase";
import type { Trip } from "../interface";

class TripService {
    tripsRef(userId: string) {
        return ref(database, `users/${userId}/trips`);
    }

    getUserTrips(
        userId: string,
        callback: (trips: Trip[]) => void
    ): Unsubscribe {
        return onValue(this.tripsRef(userId), (snapshot) => {
            const trips: Trip[] = [];
            snapshot.forEach((child) => {
                trips.push({ id: child.key as string, ...(child.val() as Trip) });
            });
            callback(trips);
        });
    }

    addTrip(userId: string, trip: <Trip>){
        return push(this.tripsRef(userId), { ...trip,});
    }

    deleteTrip(userId: string, tripId: string) {
        return remove(ref(database, `users/${userId}/trips/${tripId}`));
    }
}

export default new TripService();
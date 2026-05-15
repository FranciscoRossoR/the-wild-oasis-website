import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // const reservationId = params.reservationId;
  const { reservationId } = params;
  const reservation = await getBooking(reservationId);
  const cabin = await getCabin(reservation.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      {/* SEPARATE FILE NOT NECESSARY */}
      <UpdateReservationForm
        reservationId={reservationId}
        maxCapacity={cabin.maxCapacity}
        numGuests={reservation.numGuests}
        observations={reservation.observations}
      />
    </div>
  );
}

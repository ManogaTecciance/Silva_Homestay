import { BookingProvider } from "@/components/booking-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Welcome } from "@/components/welcome";
import { Rooms } from "@/components/rooms";
import { Packages } from "@/components/packages";
import { BikeRental } from "@/components/bike-rental";
import { Places } from "@/components/places";
import { Facilities } from "@/components/facilities";
import { Gallery } from "@/components/gallery";
import { Enquiry } from "@/components/enquiry";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <BookingProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Pillars />
          <Welcome />
          <Rooms />
          <Packages />
          <BikeRental />
          <Places />
          <Facilities />
          <Gallery />
          <Enquiry />
        </main>
        <Footer />
      </div>
    </BookingProvider>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-[url('/images/home-img.jpg')] bg-cover bg-center">
      <main>
        <div>
          <h1>
            Computer & Technology
            <br />
            Repair Shop
          </h1>
          <address>
            666 Main Street
            <br /> Tech City
          </address>
          <p>
            Open WeekDays: 8:00 to 18:00
            <br />
            Friday: Closed
            <br />
            Saturday: 19:00 to 22:00
          </p>
          <Link href="tel:(+972)52-123-4567" className="hover:underline">
            (+972)52-123-4567
          </Link>
        </div>
      </main>
    </div>
  );
}

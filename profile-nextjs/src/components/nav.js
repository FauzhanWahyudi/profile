import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fauzhan Wahyudi</h1>
        <nav className="flex space-x-4">
          <Link href="#about" className="hover:underline hover:font-bold">
            About
          </Link>
          <Link href="#projects" className="hover:underline hover:font-bold">
            Projects
          </Link>
          <Link
            href="#certifications"
            className="hover:underline hover:font-bold"
          >
            Certifications
          </Link>
          <Link href="#contact" className="hover:underline hover:font-bold">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

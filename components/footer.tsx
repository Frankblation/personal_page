import SocialLinks from "./social-links"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-dark text-white border-t border-primary/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold uppercase text-primary">Frank Blation</h2>
            <p className="text-white/60 mt-1">Software Engineer</p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; {year} Frank Blation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

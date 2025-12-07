export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">About Me</h2>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Who is Neil?</p>
          </div>

          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p>
              I am a Junior Information Systems student based in Mandaluyong City, Philippines, with a passion for
              leveraging technology to solve real-world problems.
            </p>

            <p>
              I love developing solutions to business problems using information technology. My T-shaped skill set
              allows me to wear multiple hats—from building full-stack applications to engineering data pipelines and
              implementing machine learning models. This versatility enables me to understand problems from multiple
              angles and deliver comprehensive solutions.
            </p>

            <p>
              When not coding, I'm listening to music, watching anime, or exploring the latest tech trends. I believe in
              continuous learning and pushing my boundaries to stay ahead in this rapidly evolving field.
            </p>

            <div className="pt-6 border-t border-border">
              <p className="font-semibold text-foreground">Let's connect and build something amazing together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

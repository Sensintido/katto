import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-products.png";
import logo from "@/assets/logo-kott.png";
import productTumbler from "@/assets/product-tumbler.jpg";
import productMug from "@/assets/product-mug.jpg";
import productCap from "@/assets/product-cap.jpg";
import productPens from "@/assets/product-pens.jpg";
import productTotebag from "@/assets/product-totebag.jpg";
import productKit from "@/assets/product-kit.jpg";

const products = [
  { name: "Copo Térmico Personalizado", price: "R$ 45,90", image: productTumbler, tag: "Mais Vendido" },
  { name: "Caneca Cerâmica com Logo", price: "R$ 22,50", image: productMug, tag: "Novo" },
  { name: "Boné Bordado Premium", price: "R$ 38,00", image: productCap, tag: "" },
  { name: "Kit Canetas Executivas", price: "R$ 65,00", image: productPens, tag: "Promoção" },
  { name: "Ecobag Personalizada", price: "R$ 18,90", image: productTotebag, tag: "" },
  { name: "Kit Corporativo Completo", price: "A partir de R$ 120,00", image: productKit, tag: "Destaque" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold text-primary">KÖTT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <a href="#produtos" className="relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Produtos</a>
            <a href="#sobre" className="relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Sobre</a>
            <a href="#contato" className="relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contato</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5547919102012"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity"
          >
            Orçamento
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative pt-24 overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Konstantin LTDA.
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground leading-tight mb-6">
              Brindes que{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-primary inline-block"
              >
                marcam
              </motion.span>{" "}
              presença
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              Personalizamos produtos promocionais com qualidade e criatividade para sua empresa se destacar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#produtos"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base inline-block text-center shadow-[var(--shadow-brand)] hover:shadow-lg transition-shadow"
              >
                Ver Produtos
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors inline-block text-center"
              >
                Fale Conosco
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1"
          >
            <div className="relative">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 3 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -inset-4 bg-primary/10 rounded-2xl"
              />
              <img
                src={heroImage}
                alt="Brindes personalizados Kött"
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-[16/10]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products - Store style */}
      <section id="produtos" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Brindes de qualidade para fortalecer a presença da sua marca
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden bg-muted">
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Solicitar Orçamento
                      </span>
                    </motion.div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <div className="bg-secondary rounded-2xl p-12 flex items-center justify-center">
                <motion.img
                  src={logo}
                  alt="Kött Logo"
                  className="w-90 h-auto"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Sobre a <span className="text-primary">Kött</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Konstantin LTDA, conhecida como Kött, é especialista em brindes e produtos promocionais personalizados. Atendemos empresas de todos os portes, oferecendo soluções criativas para fortalecer sua marca.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Com sede em Blumenau - SC, nos dedicamos a entregar qualidade, pontualidade e design impecável em cada projeto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Solicite um orçamento sem compromisso
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Mail, label: "E-mail", value: "corporativo@konstantin.com", href: "mailto:corporativo@konstantin.com" },
              { icon: Phone, label: "Telefone", value: "+55 47 91910-2012", href: "tel:+5547919102012" },
              { icon: MapPin, label: "Endereço", value: "Rua Professor Eurico Rabelo, Itapavazinha - SC, Brasil", href: undefined },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center gap-4 bg-primary-foreground/10 backdrop-blur rounded-xl p-8 cursor-pointer transition-colors hover:bg-primary-foreground/20"
                {...(item.href ? { as: "a", href: item.href } : {})}
              >
                <item.icon className="w-8 h-8" />
                <span className="font-semibold">{item.label}</span>
                <span className="text-sm text-primary-foreground/80 text-center">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-sm"
          >
            © 2026 Konstantin LTDA. Todos os direitos reservados.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://s3-alpha-sig.figma.com/img/3b65/973f/a9144748068dca5faadcc372f8a493a3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6G0cxMKMLBUnVP6cWeNDAWvXKxyHAJOXUFD824oKTtu0-mo01dFz-gHuHZSPybSvI17II5hpjuiVpH~dIOIT0S~P-NbZX5G0X~RnHT2d-qbxHufGV-S6t8l~6m5p5pnHZ5jnFznTbni6ReFdDezxPiyvyoIqxynH6Th3iqx1-IRbFlFqtGuyHR3qlXYJFIdH6ARCJUkvpPaJBFPa3C8mtYuwBVRPG1EfHAYgG0j~2IHql7~NLru-RrrCNblroGclf-0zER-qCIUvwugX6Vh-Q4gULSavXl1uOChJBunSqhngwfVS0k4d6AIYe84jxhJvz3B-whiKbDNaZIifHihoA__",
  },
];

export default function PartnerSection() {
  return (
    <section className="partners-section py-10">
      <h6>شركائنا</h6>
      <div className="relative partner-carousel flex h-[200px] py-10 w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <img key={review.username} src={review.img} width="135" className=" mr-4" alt="" />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

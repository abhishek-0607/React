import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "Apple plans to appeal Brazil's decision to ban the sale of iPhones without chargers",
      description:
        "Brazil's Ministry of Justice has issued an order banning Apple from selling iPhones that don't come with chargers in the country. It has also slapped the tech giant with a fine of 12.275 million Brazilian reals ($2.38 million) and has ordered the cancelation …",
      url: "https://www.engadget.com/apple-appeal-brazil-ban-iphone-sales-no-charger-052020204.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-09/615f8390-2e59-11ed-bebb-832962a4c562",
      publishedAt: "2022-09-07T05:20:20Z",
      content:
        "Brazil's Ministry of Justice has issued an order banning Apple from selling iPhones that don't come with chargers in the country. It has also slapped the tech giant with a fine of 12.275 million Braz… [+2019 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "Entrepreneur Store",
      title: "Charge All Your Apple Devices Wirelessly in One Place",
      description: "This wireless charger is also a calendar and alarm clock.",
      url: "https://www.entrepreneur.com/science-technology/charge-all-your-apple-devices-wirelessly-in-one-place/434585",
      urlToImage:
        "https://assets.entrepreneur.com/content/3x2/2000/1662069814-Ent-6-in-1WirelessChargerStand.jpeg",
      publishedAt: "2022-09-07T01:00:00Z",
      content:
        "Surviving in a competitive marketplace isn't easy. There are many ways to make your life easier and give yourself an advantage as an entrepreneur. But one of the most basic is something you probably … [+1571 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Jose García",
      title:
        "iPhone 14: sigue la Keynote de Apple de hoy en directo con nosotros",
      description:
        'Ha llegado el día. Hoy, tras infinidad de filtraciones y rumores, vamos a conocer los iPhone 14. La Keynote de Apple, bautizada como "Far out", tendrá lugar hoy, 7 de septiembre, a las 19:00 hora peninsular española y promete ser un evento lleno de novedades.…',
      url: "https://www.xataka.com/nuevo/apple-iphone-14-hoy-7-septiembre-seguir-presentacion-directo",
      urlToImage: "https://i.blogs.es/a2de42/en-directo/840_560.jpeg",
      publishedAt: "2022-09-07T07:44:00Z",
      content:
        'Ha llegado el día. Hoy, tras infinidad de filtraciones y rumores, vamos a conocer los iPhone 14. La Keynote de Apple, bautizada como "Far out", tendrá lugar hoy, 7 de septiembre, a las 19:00 hora pen… [+2110 chars]',
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva Rodríguez de Luis",
      title:
        "Cinco mejores chollos tecnológicos reacondicionados de El Corte Inglés con descuentos de hasta el 50%",
      description:
        "Si quieres ahorrar mucho dinero, merece la pena que le eches un vistazo de vez en cuando a los reacondicionados de El Corte Inglés. Allí encontrarás los productos más top de los últimos años procedentes de exposición y devolución con grandes descuentos, con t…",
      url: "https://www.xataka.com/seleccion/cinco-mejores-chollos-tecnologicos-reacondicionados-corte-ingles-descuentos-50",
      urlToImage: "https://i.blogs.es/c770ff/outlet-arapiles/840_560.jpg",
      publishedAt: "2022-09-07T06:38:15Z",
      content:
        "Si quieres ahorrar mucho dinero, merece la pena que le eches un vistazo de vez en cuando a los reacondicionados de El Corte Inglés. Allí encontrarás los productos más top de los últimos años proceden… [+6339 chars]",
    },
    {
      source: {
        id: null,
        name: "Daringfireball.net",
      },
      author: "John Gruber",
      title:
        "★ A Quick Run-Through of Rumors and Speculation Ahead of This Wednesday’s ‘Far Out’ Event for the iPhones 14, New Apple Watch Models, and Who Knows What Else",
      description: "Oh, how about “Apple Watch Max”?",
      url: "https://daringfireball.net/2022/09/far_out_rumor_roundup",
      urlToImage: "https://daringfireball.net/graphics/df-square-1024.png",
      publishedAt: "2022-09-07T02:45:27Z",
      content:
        "Name Games\n\nThe long-rumored lineup of iPhone 14 models is that the Mini is out of the lineup, and replacing it is a big-screened non-Pro model. So: two 6.1-inch new iPhones (regular and Pro), and tw… [+3375 chars]",
    },
  ];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          {this.state.articles.map((e, i) => (
            <div className="col-md-4" key={i}>
              <Newsitem
                title={e.title}
                description={e.description}
                imgUrl={e.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

import React from 'react'

export default function MainGridBrand() {
    return (
        <div className="container-wrapper">
            <div className="portfolio-items-wrapper">

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://static-01.daraz.pk/p/33f7c1373ef499d6310a76e8adcc98bd.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://image3.mouthshut.com/images/imagesp/925917207s.jpg" alt="" />
                        </div>
                        <div className="subtitle">
                           <h3> Men's Fashion </h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://static-01.daraz.pk/p/mdc/68967cb658b58f4c517c9dd4f433134d.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://image3.mouthshut.com/images/imagesp/925917207s.jpg" alt="" />
                        </div>
                        <div className="subtitle">
                           <h3> Women's Fashion </h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://static-01.daraz.pk/p/e180910b171d01853560a42caad7e0f9.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://image3.mouthshut.com/images/imagesp/925917207s.jpg" alt="" />
                        </div>
                        <div className="subtitle">
                           <h3> Decorations </h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://cdn.shopify.com/s/files/1/0671/0621/products/6_f9112491-656a-413e-a773-bcbf3e9c89ef_2000x.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png" alt="" />
                        </div>
                        <div className="subtitle">
                           <h3> Men's Fashion </h3>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://cdn.shopify.com/s/files/1/0671/0621/products/FrontDetail_2000x.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png" alt=""/>
                        </div>
                        <div className="subtitle">
                           <h3> Women's Fashion </h3>
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: "url(https://cdn.shopify.com/s/files/1/0671/0621/products/02_41beeeeb-4c5a-4250-b63a-fd4397b42c13_2000x.jpg)"}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png" alt="" />
                        </div>
                        <div className="subtitle">
                           <h3> Decorations</h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: ""}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                        </div>
                        <div className="subtitle">
                           <h3> 1st left </h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: ""}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                        </div>
                        <div className="subtitle">
                           <h3> 2nd middle </h3>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" 
                        style={{backgroundImage: ""}}>
                    </div>
                    
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                        </div>
                        <div className="subtitle">
                           <h3>third right </h3>
                        </div>
                    </div>
                </div>




            </div>
        </div>    
    )
}

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.childNodes[1].classList.add('img-darken');
        })
        item.addEventListener('mouseleave', () => {
            item.childNodes[1].classList.remove('img-darken');
        })
    })
    
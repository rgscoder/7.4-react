import React from 'react'
import image1 from './images/blog-image-1.jpeg';
import image2 from './images/blog-image-2.jpeg';

function Main() {
  return (
    <div>
        <main>
          <article>
          <h3><time datetime="11-12-20" id="text-gray">11/12/20</time></h3>
             <h4 class="title">On the Street in Brooklyn</h4>
            <img src={image1} alt="Blog image-1" />
            <p className="para1" id="text-gray">Cray lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime libero impedit laborum temporibus tempora, est deleniti delectus ut 
            aspernatur nostrum tenetur optio deserunt quam molestiae amet ullam ratione at alias!
            Dolor sit amet consectetur, adipisicing elit. 
            Beatae amet accusantium inventore, aliquid eius maiores modi eum veniam ad fuga, 
            magni alias, iure esse eaque. Similique necessitatibus adipisci voluptates nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates quos unde enim magnam deserunt officiis omnis explicabo 
            libero corrupti laudantium illo, quas soluta provident, doloribus, cupiditate itaque ipsum laborum. Sequi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magnam quaerat hic, fugiat vero molestias 
            ipsa repellat veniam laboriosam magni doloribus qui, voluptatum tempore suscipit modi. 
            Reiciendis unde tempora ipsum.</p>
            <aside> <a className="continue" href="">Continues...</a> </aside>
            </article>

          <article>
          <h3><time datetime="11-11-20" id="text-gray">11/11/20</time></h3>
             <h4 class="title">Vintage in Vogue</h4>
            <img src={image2} alt="Blog image-2" />
            <p className="para2" id="text-gray">Selfies lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime libero impedit laborum 
                temporibus tempora, est deleniti delectus ut aspernatur nostrum tenetur optio deserunt quam molestiae
                amet ullam ratione at alias!
                Beatae amet accusantium inventore, aliquid eius maiores modi eum veniam ad fuga, 
                magni alias, iure esse eaque. Similique necessitatibus adipisci voluptates nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quos unde enim magnam deserunt officiis omnis explicabo 
                libero corrupti laudantium illo, quas soluta provident, doloribus, cupiditate itaque ipsum laborum. Sequi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure nobis et eius libero maiores ratione eveniet facilis ipsa atque cumque ducimus, magni minus fuga similique cupiditate necessitatibus iste vero.</p>
            <aside><a className="continue" href="">Continues...</a> </aside>
            </article>
        </main>
    </div>
  )
}

export default Main
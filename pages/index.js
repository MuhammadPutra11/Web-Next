import Head from "next/head";
import image from 'next/image';
import Hero from './components/Hero';
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Belajar Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Maulid Habsy' message='Selalu melantunkan pujian-pujian kepada Rasulullah SAW.'/>
      <Slider slides={SliderData}/>
      <main>
        <section>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem quia fuga. Ea aspernatur possimus dolorem consectetur, perferendis labore autem ducimus debitis? Hic, rerum. Ducimus doloremque cumque minima laudantium voluptates soluta accusantium. Rerum doloribus magni enim modi, in error eaque tempora provident blanditiis! Nesciunt distinctio minima eaque accusamus! Sed consectetur necessitatibus consequuntur maxime asperiores voluptatibus pariatur, accusamus tenetur laboriosam maiores cumque? Labore cum eos in quasi earum magnam maxime sunt, quod culpa laboriosam amet aliquam eligendi nesciunt velit minus repellat numquam non eius ab? Odio quas doloremque rem vitae, repellendus alias quia obcaecati aperiam praesentium dolorum porro, beatae tenetur corrupti? Dolorem voluptatem eaque odit tempora nostrum. Sunt quibusdam, possimus magnam dolor veritatis tempora quo itaque vitae quas optio mollitia excepturi maxime incidunt a! Ducimus obcaecati illum voluptates perferendis reiciendis hic praesentium reprehenderit dolor, labore earum nemo quam, dignissimos debitis quisquam culpa doloribus fuga, accusantium error laboriosam. Aperiam ut sit illo, dignissimos ipsam rem necessitatibus nulla error voluptatibus praesentium ducimus similique quia adipisci. Blanditiis exercitationem perspiciatis ipsa aspernatur laborum ex officiis, maxime libero alias, unde illum accusantium totam officia, magni culpa a impedit quaerat cum repudiandae nulla quisquam adipisci reprehenderit molestiae! Iure a, assumenda sunt ipsum illo quasi repellendus accusantium laboriosam. Sequi labore quasi nobis recusandae numquam incidunt iure unde minus molestias corporis, optio quaerat, reprehenderit dolores? Dignissimos quos veniam dicta. Laborum distinctio dolorem saepe dolor maxime qui sunt ullam! Adipisci blanditiis quam quaerat, nulla temporibus accusamus neque pariatur explicabo, aperiam error quia incidunt repellendus ratione suscipit! Architecto alias accusantium ab quisquam amet! Consequuntur reiciendis quod fuga aliquam. Incidunt tenetur distinctio ad ipsa, odio eligendi id minima consequatur, fugiat quia tempora. Aperiam velit sit deleniti totam, modi a, fugit obcaecati maiores porro doloribus, quaerat placeat dolores ad cum minus. Doloribus tenetur similique voluptate eos inventore harum laborum error nam temporibus quia sapiente, qui nemo cumque velit nisi rem veniam molestiae quo vel aut id ratione soluta! Molestiae numquam omnis aut commodi aliquam error tempora praesentium quaerat sapiente quo voluptatem cum, non fuga dolorem asperiores soluta voluptate nisi expedita impedit animi iure assumenda eum sit. Quisquam necessitatibus quam error sequi nulla doloremque maxime totam quos, illum quasi asperiores perferendis explicabo officiis autem repellat et aspernatur, omnis quis beatae nostrum culpa. Optio illo, laborum vero voluptates eum ex. Quisquam commodi ipsum ullam nobis nisi sint animi adipisci tenetur labore asperiores illo omnis fugiat itaque vitae, nam debitis quasi sapiente aliquid fuga dicta hic? Impedit expedita qui suscipit obcaecati numquam corrupti totam quia, ipsa pariatur iure doloremque dicta, excepturi eaque quam doloribus iste et veritatis, soluta dolores eligendi quas. Voluptatibus perferendis labore, eaque eos incidunt recusandae quam dolores aspernatur amet distinctio voluptatem reiciendis minus, dolore blanditiis dolorum maiores odit repellendus porro laudantium rerum minima. Nisi obcaecati dolorem unde, corporis itaque ut eveniet animi ipsam optio explicabo earum aspernatur dolor suscipit aliquam velit doloribus voluptas, at amet doloremque numquam maxime consectetur veniam possimus beatae? Velit, suscipit. Quam velit, dignissimos dolorem sequi asperiores ipsum aut debitis laboriosam quo? Itaque optio natus quo facilis, numquam minus quasi.</div>
        </section>
      </main>
    </>
  );
}

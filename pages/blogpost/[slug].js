import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
       <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum dolorum natus eligendi non alias numquam, exercitationem, optio veniam omnis vitae ratione doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quas soluta laborum? Optio amet consectetur ab inventore perspiciatis officiis expedita ipsa? Id, repellat ratione unde ullam, omnis dolorem ipsa deleniti, quod ducimus eligendi nam totam. Autem tempore earum, alias deleniti corrupti doloribus sunt est.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel reiciendis modi ea, tempore ullam veritatis ex maxime quam at excepturi provident non perspiciatis, unde quasi minus cupiditate inventore quod maiores esse, eveniet neque voluptates. Quod expedita soluta veritatis delectus molestiae sapiente ipsa dicta culpa velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis mollitia, ipsum tempore minima hic tenetur asperiores ipsam suscipit, quisquam modi nesciunt eos, corporis facere facilis! Quis repellat libero unde! Dolor aliquid consectetur beatae ex dolore amet fugit vero! Optio veritatis facilis quam itaque expedita.
      </div>
      </main>
    </div>
  )
}

export default slug;
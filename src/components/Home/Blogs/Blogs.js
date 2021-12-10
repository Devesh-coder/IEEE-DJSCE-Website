import React from 'react';
import styles from './Blogs.module.scss';
import BlogDescription from './BlogDescription/BlogDescription';
import image1 from "../../../images/BlogPic1.svg";
import image2 from "../../../images/BlogPic2.svg";
import image3 from "../../../images/BlogPic3.svg";

function Blogs() {

    const image = [image1, image2, image3];
    const title = ['LoraWAN', 'Capitalize', 'Capitalize'];
    const description = ['We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.'];

    return (
        <div className={styles.Blogs}>
            <section>
                <h1 className={styles.heading}>OUR BLOGS</h1>
            </section>

            <section className={styles.content}>
                <BlogDescription image={image[0]} title={title[0]} description={description[0]} />
                <BlogDescription image={image[1]} title={title[1]} description={description[0]} />
                <BlogDescription image={image[2]} title={title[2]} description={description[0]} />
            </section>
        </div>
    )
}

export default Blogs

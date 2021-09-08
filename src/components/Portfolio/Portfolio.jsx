import webStudio from '../../images/webStudio.jpg'
import iceCream from '../../images/iceCream.jpg'
import filmoteka from '../../images/filmoteka.jpg'
import phonebook from '../../images/phonebook.jpg'
import serchmovies from '../../images/serchmovies.jpg'
import imgfinder from '../../images/imgfinder.jpg'
import slimmom from '../../images/slimmom.jpg'
import styles from './Portfolio.module.scss'
export default function Portfolio() {
    return (
        <ul className={styles.gallery}>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Web-Studio</p>
                <a target='_blank' href="https://roman27011986.github.io/goit-markup-hw-08/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={webStudio}  alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/goit-markup-hw-08" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
               </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Ice Cream</p>
                <a target='_blank' href="https://roman27011986.github.io/iceCream/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={iceCream} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/iceCream" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Filmoteka</p>
                <a target='_blank' href="https://roman27011986.github.io/Movies_attachment/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={filmoteka} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/Movies_attachment/tree/master" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Phonebook</p>
                <a target='_blank' href="https://rsn-hook.netlify.app/contacts" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={phonebook} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/goit-react-hw-09-phonebook" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Serch movie</p>
                <a target='_blank' href="https://nrs-netlify-movies.netlify.app/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={serchmovies} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/goit-react-hw-04-movies" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Image finder</p>
                <a target='_blank' href="https://roman27011986.github.io/goit-js-hw-13-image-finder/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={imgfinder} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/goit-js-hw-13-image-finder/tree/main" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            <li className={styles.galleryItem}>
                <p className={styles.galleryTitle}>Slim-mom</p>
                <a target='_blank' href="https://slim-mom-didorsn.netlify.app/" rel="noreferrer noopenr">
                    <img className={styles.galleryImg} src={slimmom} alt="" />
                </a>
                <div className={styles.galleryContent}>
                    <a href="https://github.com/Roman27011986/slim-mom" target='_blank' className={styles.gallerySvg} rel="noreferrer">
                    <svg fill="currentColor" version="1.1"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
                        <path  d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z"></path>
                    </svg>
                </a>
                </div>
            </li>
            </ul>
    );
};
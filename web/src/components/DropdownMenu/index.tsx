import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FiPlus } from "react-icons/fi";

import styles from './styles.module.scss';
import api from '../../api/api';

export function DropdownMenu(){
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [preview, setPreview] = useState<string[]>([]);

    function handleInputFileChange(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files.length > 0) {
            const selectedImages = Array.from(e.target.files);
            setImages(selectedImages);

            const selectedImagesPreview = selectedImages.map(image => {
                return URL.createObjectURL(image);
            });

            setPreview(selectedImagesPreview);
        }
    }

    async function handleSubmit(e: FormEvent){
        e.preventDefault();

        const data = {
            image: images
        }

        console.log('image: ', data)

        api.post('image', data);
        
    }

    function handleDropdownMenuActive() {
        setIsActive(!isActive);
    }

    return(
        <div className={styles.menuContainer}>
            <div onClick={handleDropdownMenuActive} className={styles.menuTrigger}>
                <RiArrowDownSLine />
            </div>
            <form>
                <nav
                    ref={dropdownRef}
                    className={isActive ? `${styles.active}` : ''}>
                    <div>
                        <div className={styles.imageDropdown}>
                            <label htmlFor="image" className={styles.newImage}>
                                {preview.map(image => {
                                    return (
                                        <img key={image} src={image} alt="img" />
                                    )
                                })}
                                <FiPlus size={30} color="#0E9888" />
                            </label>

                            <input onChange={handleInputFileChange} type="file" id="image" />
                            <p>Clique para adicionar ou trocar de foto</p>
                        </div>
                        <div className={styles.DropdownButton}>
                            <button type="submit" onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
}
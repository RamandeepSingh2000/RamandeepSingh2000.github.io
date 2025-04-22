import styles from '../../styles/tiles/Tile.module.css';

type TileProps = {
    children?: React.ReactNode;
}

export default function Tile(props: TileProps){
    return (
        <div className={styles.tile}>
            {props.children}
        </div>
    )
}
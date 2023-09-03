import './card.scss'

interface Props {
    img?: string;
    title?: string;
    subTitle?: string;
    price?: number;
}

const Card = ({img, title, subTitle, price}: Props) => {
    console.log(img, title, subTitle, price)

    return (
        <div className="card">
            <img src="" alt="" />
        </div>
    )
}

export default Card;
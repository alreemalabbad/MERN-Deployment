import Piret from './piret';

const List = (props) => {
    return (
        <>
        <div>
            {props.pirets.length > 0 &&
            props.pirets.sort((a, b) => a.name.localeCompare(b.name)).map((piret) => 
                    <>
                    <Piret piret={piret} isold={props.isold} setisold={props.setisold} />
                    </>
            )}
        </div>
        </>
    )
}
export default List;

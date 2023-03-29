const CreateProduct =() => {

        const handleSubmit =(event)=>{
            event.preventDefault();
        
        const title = event.target.title.value;
        const description= event.target.description.value;
        const price=event.target.price.value;

        console.log(title, description, price)
        };

    return(
        <form onSubmit= {handleSubmit}>
        <label>title</label>
        <input type="text" name="title"/>
        <label>description</label>
        <input type="text" name="description"/>
        <label>price</label>
        <input type="number" name="price"/>
        <input type="submit"/>
        </form>
    )
};

export default CreateProduct;
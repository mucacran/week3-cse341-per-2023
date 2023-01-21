displayJoke = (req,res)=>{
    const data = "como el telefono propose a su novia? ..el tiene su anillo";
    res.status(200).send(data);
};

module.exports ={
    displayJoke,
}

//Creating a farmer profile 
router.post('/', async(req, res)=>{
    try{
        const newFarmer = await Farmer.create(req.body);
        res.status(201).json(newFarmer);
    } catch(err){
        res.status(400).json({message: err.message});
    }
})

// updating a farmer profile

router.put('/:id', async(req, res) => {
    try{
        const updatedFarmer = await Farmer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        res.json(updatedFarmer)
    }catch(err){
        res.status(400).json({message: err.message});
    }
})
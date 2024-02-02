import { TypesUser } from '../model/TypeModel.js';

export const getTypeUser = async (req, res) =>{
    const type = await TypesUser.findAll({
        where: {
            status : false
        }
    });
    res.status(200).json({'type' : type})
}

export const store = async (req, res)=>{
   try {
    const {type} = req.body
    if(!type){
        res.status(401).json({'message' : 'No se permiten campos vacios'})
    }else{
        const tp = await TypesUser.create({
            type: type
        });

        res.status(201).json({'message':'create sucessfull', type: tp})
    }
   } catch (error) {
    res.status(500).json({message : error.message})
   }
}

export  const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const {type} =req.body
        if(!type){
            return res.status(401).json({ message: "No se pueden imprimir campos vacios"});
        }
        const typeFinded = await TypesUser.findByPk(id);
        if (typeFinded) {
            typeFinded.set({type});
            typeFinded.save();
           return res.status(200).json({message:'Actualizado Correctamente' })
        }else{
            return res.status(404).json({ message: "not type found"})
        }
    } catch (error) {
        
    }

}

export  const delet = async(req, res)=>{
    try {
        const id = req.params.id;
        const typeFinded = await TypesUser.findByPk(id);
        if (typeFinded) {
            typeFinded.set({status :true});
            typeFinded.save();
           return res.status(200).json({message:'Eliminado Correctamente' })
        }else{
            return res.status(404).json({ message: "not type found"})
        }
    } catch (error) {
        
    }

}
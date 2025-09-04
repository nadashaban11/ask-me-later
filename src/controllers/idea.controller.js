
import { Idea } from "../models/idea.model.js";

export async function getAllIdeas(req,res){
    const ideas = await Idea.find();

    res.status(200).json(ideas);
};


export async function getIdeaById(req,res) {
    const id = req.params.id;
    const idea = await Idea.findById(id);

    if(idea){
        res.status(200).json(note);
    }else{
        res.status(404).json({error : 'Idea not found'});
    }

}


export async function addIdea(req,res){
    const newIdea = new Idea(req.body);
    await newIdea.save();

    res.status(201).json(newIdea);
}


export async function updateIdea(req,res){
    const updatedIdea = req.body;
    const id = req.params.id;

    await Idea.updateOne({_id : id}, updateIdea)
        .then(()=>{
            res.status(200).json({message : 'Idea updated successfully'});
        });
}

export async function deleteIdea(req,res) {
    const id = req.params.id;

    const oldIdea = await Idea.findById(id);

    await Idea.deleteOne(oldIdea).then(()=>{
        res.status(200).json({message : 'idea deleted successfully'})
    })
}


import { Idea } from "../models/idea.model.js";

export async function getAllIdeas(req, res) {
    try {
        const ideas = await Idea.find();
        res.status(200).json(ideas);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving your ideas" });
    }
}

export async function getIdeaById(req, res) {
    const id = req.params.id;

    try {
        const idea = await Idea.findById(id);
        if (idea) {
            res.status(200).json(idea);
        } else {
            res.status(404).json({ error: "Idea not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Invalid ID" });
    }
}

export async function addIdea(req, res) {
    try {
        const newIdea = new Idea(req.body);
        await newIdea.save();
        res.status(201).json(newIdea);
    } catch (err) {
        res.status(500).json({ error: "Error adding idea" });
    }
}

export async function updateIdea(req, res) {
    const id = req.params.id;
    const updatedIdea = req.body;

    try {
        const idea = await Idea.findByIdAndUpdate(id, updatedIdea, { new: true });
        if (!idea) {
            return res.status(404).json({ error: "Idea not found" });
        }
        res.status(200).json({ message: "Idea updated successfully", idea });
    } catch (err) {
        res.status(500).json({ error: "Error updating idea" });
    }
}

export async function deleteIdea(req, res) {
    const id = req.params.id;

    try {
        const idea = await Idea.findByIdAndDelete(id);
        if (!idea) {
            return res.status(404).json({ error: "Idea not found" });
        }
        res.status(200).json({ message: "Idea deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting idea" });
    }
}

import { Idea } from "../models/idea.model.js";

export async function getAllIdeas(req, res) {
    try {
        const ideas = await Idea.find();
        res.status(200).json({ success: true, data: ideas });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error retrieving ideas" });
    }
}

export async function getIdeaById(req, res) {
    const id = req.params.id;

    try {
        const idea = await Idea.findById(id);
        if (idea) {
            res.status(200).json({ success: true, data: idea });
        } else {
            return res.status(404).json({ success: false, message: "Idea not found" });
        }
    } catch (err) {
        res.status(400).json({ success : false, error: "Invalid ID" });
    }
}

export async function addIdea(req, res) {
    try {
        const newIdea = new Idea(req.body);
        await newIdea.save();
        res.status(201).json({ success: true, message: "Idea added successfully", data: newIdea });
    } catch (err) {
        res.status(400).json({ success: false, message: "Validation error", error: err.message });
    }
}

export async function updateIdea(req, res) {
    const id = req.params.id;
    const updatedIdea = req.body;

    try {
        const idea = await Idea.findByIdAndUpdate(id, updatedIdea, {
            new: true,
            runValidators: true,
        });
;
        if (!idea) {
            return res.status(404).json({ success: false, message: "Idea not found" });
        }
        res.status(200).json({ success: true, message: "Idea updated successfully", data: idea });
    } catch (err) {
        res.status(400).json({ success: false, message: "Error updating idea", error: err.message });
    }
}

export async function deleteIdea(req, res) {
    const id = req.params.id;

    try {
        const idea = await Idea.findByIdAndDelete(id);
        if (!idea) {
            return res.status(404).json({ success: false, message: "Idea not found" });
        }
        res.status(200).json({ success: true, message: "Idea deleted successfully" });
    } catch (err) {
        res.status(400).json({ success: false, message: "Error deleting idea", error: err.message });
    }
}

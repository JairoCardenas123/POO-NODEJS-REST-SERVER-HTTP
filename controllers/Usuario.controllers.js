
const getUsers = (req,res)=>{
    res.status(403).json({
        "message":"home page"
    })
}

const postUsers =(req,res)=>{
    res.json({
        "message":"post api"
    })
}

const deleteUsers = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

const putUsers = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

const patchUsers = (req,res)=>{
    res.json({
        "message":"post api"
    })
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}
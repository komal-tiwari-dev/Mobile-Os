import React from "react"

let List =({data})=>{
    const list=data.map((ele)=>{
        return <li>{ele}</li>
    })
    return <ul>{list}</ul>
}

export {List}
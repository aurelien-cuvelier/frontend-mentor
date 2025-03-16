enum Category {
    REACTION="Reaction",
    MEMORY="Memory",
    VERBAL="Verbal",
    VISUAL="Visual",
}

export interface ResultElement {
    "category": Category
    "score": number,
    "icon": string
}
/**
 * Tailwind won't let you construct a class dynamically (e.g `text-${some value}`)
 * so i had to set both classes statically in the value for text and bg
 * also bg-opacity-X does not work on custom colors, but /X does
 */


const categoryToColor:Record<Category,{ text: string; bg: string }> = {
    [Category.REACTION]:{ text: 'text-light-red', bg: 'bg-light-red/10' },
    [Category.MEMORY]:{ text: 'text-orangey-yellow', bg: 'bg-orangey-yellow/10' },
    [Category.VERBAL]:{ text: 'text-green-teal', bg: 'bg-green-teal/10' },
    [Category.VISUAL]:{ text: 'text-cobalt-blue', bg: 'bg-cobalt-blue/10' }
}

export default function ResultCard({element}:{element:ResultElement}){
    const elemColor = categoryToColor[element.category];
    {console.log(element.icon)}
    return <div className={`h-[50px] w-[100%] rounded-[10px] !px-4 flex justify-between items-center ${elemColor.bg}`}>
        <div className={`font-bold ${elemColor.text} flex gap-2`}>
            
        <img src={element.icon} alt={`${element.category}-icon`} />
        {element.category}
        </div>
        <div className="font-bold">{element.score} <span className="text-gray-400">/ 100</span></div>
        </div>
}
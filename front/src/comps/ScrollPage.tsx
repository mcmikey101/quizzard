import { useState } from 'react';
import '../styles/scrollpage.css'
import Entry from './Entry'

interface ScrollItem {
    type: string;
    text: string;
    description: string;
}

interface ScrollItems {
    [key: string]: ScrollItem;
}

type Filters = string[]

export default function ScrollPage() {
    const [filters, setFilters] = useState<Filters>([])
    function handleCheckbox(e: any) {
        let filtered = filters.slice()
        if (!e.target.checked) {
            filtered.splice(filtered.indexOf(e.target.name), 1)
            setFilters(filtered)
        } else {
            filtered.push(e.target.name)
            setFilters(filtered)
        }
    }
    const items: ScrollItems = {
        item1: {
            type: '1',
            text: 'object 1',
            description: 'Description of object 1'
        },
        item2: {
            type: '2',
            text: 'object 2',
            description: 'Description of object 2'
        },
        item3: {
            type: '3',
            text: 'object 3',
            description: 'Description of object 3'
        },
        item4: {
            type: '1',
            text: 'object 1',
            description: 'Description of object 1'
        },
        item5: {
            type: '2',
            text: 'object 2',
            description: 'Description of object 2'
        },
        item6: {
            type: '3',
            text: 'object 3',
            description: 'Description of object 3'
        },
    }
    return (
        <>
            <div className="mainscroll">
                <div className="cont">
                    <div className="filters">
                        <div className="checkboxcont">
                            <input onChange={(e) => handleCheckbox(e)} type="checkbox" className="filtercheck" name="1"/>
                            <label htmlFor='1'>Option 1</label>
                        </div>
                        <div className="checkboxcont">
                            <input onChange={(e) => handleCheckbox(e)} type="checkbox" className="filtercheck" name="2"/>
                            <label htmlFor='2'>Option 2</label>
                        </div>
                        <div className="checkboxcont">
                            <input onChange={(e) => handleCheckbox(e)} type="checkbox" className="filtercheck" name="3"/>
                            <label htmlFor='3'>Option 3</label>
                        </div>
                    </div>
                    <div className="scroller">
                        {
                            Object.entries(items).map((i) => {
                                if (filters.indexOf(i[1].type) > -1) {
                                    return (
                                        <Entry key={i[0]} item={i[1]}/>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="news"></div>
                </div>
            </div>
        </>
    )
}
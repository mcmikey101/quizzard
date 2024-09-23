import '../styles/scrollpage.css'
import Entry from './Entry';
interface ScrollItem {
    text: string;
    description: string;
}

interface ScrollItems {
    [key: string]: ScrollItem;
}

export default function ScrollPage() {
    const items: ScrollItems = {
        item1: {
            text: 'object 1',
            description: 'Description of object 1'
        },
        item2: {
            text: 'object 2',
            description: 'Description of object 2'
        },
        item3: {
            text: 'object 3',
            description: 'Description of object 3'
        },
        item4: {
            text: 'object 3',
            description: 'Description of object 3'
        },
        item5: {
            text: 'object 3',
            description: 'Description of object 3'
        },
        item6: {
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
                            <input type="checkbox" className="filtercheck" name="option1"/>
                            <label htmlFor='option1'>Option 1</label>
                        </div>
                        <div className="checkboxcont">
                            <input type="checkbox" className="filtercheck" name="option1"/>
                            <label htmlFor='option1'>Option 2</label>
                        </div>
                        <div className="checkboxcont">
                            <input type="checkbox" className="filtercheck" name="option1"/>
                            <label htmlFor='option1'>Option 3</label>
                        </div>
                    </div>
                    <div className="scroller">
                        {
                        Object.entries(items).map((i) => {
                            return (
                                <Entry key={i[0]} item={i[1]}/>
                            )
                        })
                        }
                    </div>
                    <div className="news"></div>
                </div>
            </div>
        </>
    )
}
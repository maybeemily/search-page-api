import './html-equal.js';
import makePatternTemplate from '../src/make-pattern-template.js';

const test = QUnit.test;

QUnit.module('Html Template Tests');

test('if item is missing, replace with placeholder information', assert => {
    //arrange
    const pattern = {
        "id": 909820,
        "name": "Clean Lines",
        "permalink": "clean-lines-2",
        "first_photo": {
            "medium_url": "https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg",
        },
        "pattern_author": {
            "name": "Susan Ashcroft",
            "users": [
                {
                    "username": "stitchnerd",
                }
            ]
        },
        "pattern_sources": [
            {
                
            }
        ]
    };
    //act

    const result = makePatternTemplate(pattern);

    //assert
    assert.htmlEqual(result, /*html*/ `
    <li>
    <section class="li-text">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><h2>Clean Lines</h2></a>
        <p>Designer: <a href="https://www.ravelry.com">Susan Ashcroft</a></p>
        <p>Ravelry Username: stitchnerd</p>
    </section>
    
    <section class="li-image">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><img src="https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg" alt="Clean Lines"></a>
    </section>
    </li>
    `);
});



test('html template will match template literal', assert => {
    //arrange
    const pattern = {
        "id": 909820,
        "name": "Clean Lines",
        "permalink": "clean-lines-2",
        "first_photo": {
            "medium_url": "https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg",
        },
        "pattern_author": {
            "name": "Susan Ashcroft",
            "users": [
                {
                    "username": "stitchnerd",
                }
            ]
        },
        "pattern_sources": [
            {
                "url": "http://www.ravelry.com/stores/stitchnerd-designs",
            }
        ]
    };


    //act
    
    const result = makePatternTemplate(pattern);
    //assert
    assert.htmlEqual(result, /*html*/ `
    <li>
    <section class="li-text">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><h2>Clean Lines</h2></a>
        <p>Designer: <a href="http://www.ravelry.com/stores/stitchnerd-designs">Susan Ashcroft</a></p>
        <p>Ravelry Username: stitchnerd</p>
    </section>
    
    <section class="li-image">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><img src="https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg" alt="Clean Lines"></a>
    </section>
    </li>
    `);
});
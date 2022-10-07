import React from 'react'
import Taggle from 'taggle'
import '../index.css'
import $ from 'jquery'
const ModalNewTeam = ({ setModalOnNew, setChoiceNew }) => {

    const handleSubmit = () => {
        setChoiceNew(true)
        setModalOnNew(false)
    }
    const handleCancel = () => {
        setChoiceNew(false)
        setModalOnNew(false)
    }

    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    function parseTags(id) {
        var setTags = $('#' + id).text();
        setTags = setTags.replace(/\s\s+/g, '');

        if (!setTags.length) {
            return [];
        }

        setTags = setTags.replace(/(^\s*)|(,\s*$)/g, '');
        setTags = setTags.split(',');
        return setTags;
    }

    $(document).ready(function () {
        if (document.getElementById('tags')) {
            new Taggle('tags', {
                hiddenInputName: 'tags[]',
                placeholder: '',
                tags: parseTags('tag-data'),
                duplicateTagClass: 'bounce',
                onTagAdd: function () {
                    $(this).val('');
                    $('.tt-suggestion').remove();
                }
            });
        }
    });
    return (

        <div className="   bg-zinc-200/60 opacity-100 fixed inset-0  z-50  ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col items-center bg-white py-12 px-24 shadow-lg rounded-xl ">

                    <div className="flex  text-2xl font-bold text-center mb-10" >Check Free Slots</div>
                    <div className="flex  text-xs mb-10" >Enter the reg. no. of the members</div>
                    {/* <textarea class=" rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium focus:outline-none focus:bg-white" >
                        <div id="example1"></div>
                    </textarea> */}
                    {/* <div id="example1" className="input textarea" ></div>
                    <p id="log"></p> */}

                    <div className="form-group border-black">
                        <div id="tags" className="tag-container">hi</div>
                    </div>

                    <div className="flex border-black">
                        <button onClick={handleCancel} className=" rounded px-4 py-2 text-black hover:underline bg-white ">Cancel</button>
                        <button onClick={handleSubmit} className="rounded px-4 py-2 ml-4 text-white bg-blueTheme text-xs">Find Slots!</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalNewTeam
(function () {
    const ce_nodes = document.querySelectorAll('code');

    for (let i = 0, len = ce_nodes.length; i < len; i++) {
        let element = ce_nodes[i];
        let compiler = "g82";
        let options = "-O1 -march=haswell -Wall -Wextra -pedantic";
        let source = unescape(element.textContent);
        let lines = source.split('\n');
        source = "";
        let displaySource = "";
        let matcher = /^\/\/\/\s*([^:]+):(.*)$/;
        let skipDisplay = false;
        for (let idx = 0; idx < lines.length; ++idx) {
            let line = lines[idx];
            let match = line.match(matcher);
            if (match) {
                compiler = match[1];
                options = match[2];
            } else if (line.trim() !== "") {
                if (line === "// setup") {
                    skipDisplay = true;
                } else if (line[0] !== ' ') {
                    skipDisplay = false;
                }

                source += line + "\n";
                if (!skipDisplay)
                    displaySource += line + "\n"
            }
        }
        let content = [];
        content.push({
            type: 'component',
            componentName: 'codeEditor',
            componentState: {
                id: 1,
                source: source,
                options: {compileOnChange: true, colouriseAsm: true},
                fontScale: 2.5
            }
        });
        content.push({
            type: 'component',
            componentName: 'compiler',
            componentState: {
                source: 1,
                filters: {commentOnly: true, directives: true, intel: true, labels: true, trim: true},
                options: options,
                compiler: compiler,
                fontScale: 3.0
            }
        });
        let obj = {
            version: 4,
            content: [{type: 'row', content: content}]
        };
        let ceFragment = encodeURIComponent(JSON.stringify(obj));

        const isPdf = !!window.location.search.match(/print-pdf/gi);
        const baseUrl = isPdf ? 'https://godbolt.org/' : 'http://localhost:10240/';

        element.onclick = (evt) => {
            if (evt.ctrlKey) {
                window.location.assign(baseUrl + "#" + ceFragment);
            }
        };
        element.textContent = displaySource;
    }
})();

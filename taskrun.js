require('dotenv').config()
const chokidar = require('chokidar');
const fs = require('fs')
const webpack = require('webpack')

async function compile(folder, srcFolder, ext) {
    try {
        chokidar.watch(`./${srcFolder}/${folder}`).on('all', (event, path) => {
            if (event === 'change') {
                if (fs.existsSync(`./public/app/${folder}.${ext}`)) {
                    fs.unlinkSync(`./public/app/${folder}.${ext}`)
                }
                console.clear()
                console.log(`start creating ${folder}`);
                let compiler
                if (srcFolder === 'src-fe') {
                    let config = require('./vue.task.config')
                    compiler = webpack(config(folder))
                }
                if (ext === 'js') {
                    compiler.run(async (err, res) => {
                        if (res.compilation.errors.length === 0) {
                            console.log('done')
                        } else {
                            console.error(res.compilation.errors[0]);
                            // console.error(res.compilation.errors.length - 1)
                        }
                    })
                }
            }
        })
    } catch (error) {
        console.log(error)
    }

}

async function main() {
    try {
        let listVue = fs.readdirSync(`./src-fe`)
        let list = []
        for (let i = 0; i < listVue.length; i++) {
            const e = listVue[i];
            list.push({
                folder: e,
                srcFolder: 'src-fe',
                ext: 'js'
            })
        }

        for (let i = 0; i < list.length; i++) {
            const e = list[i];
            await compile(e.folder, e.srcFolder, e.ext)
        }


        // console.log(listStyle);
        // console.log(list);
    } catch (error) {
        console.log(error);
    }
}

main()
import path from 'path'
import serverpacks from './serverpack.json'
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'fs'

const ensureExistsSync = (path: string) => {
    if (!existsSync(path)) {
        mkdirSync(path)
    }
}

const BASE_PATH = '.'
const SERVER_PATH = path.join(BASE_PATH, 'server')

rmSync(SERVER_PATH, { recursive: true })
ensureExistsSync(SERVER_PATH)

for (const pack of serverpacks) {
    const packPath = path.join(SERVER_PATH, pack.directory)
    ensureExistsSync(packPath)

    if (pack.files) {
        // only copy specified files
        for (const file of pack.files) {
            const fileSourcePath = path.join(BASE_PATH, pack.directory, file)
            const fileTargetPath = path.join(SERVER_PATH, pack.directory, file)

            if (!existsSync(fileSourcePath)) {
                console.warn(`File ${fileSourcePath} does not exist`)
                continue
            }
            ensureExistsSync(path.dirname(fileTargetPath))
            copyFileSync(fileSourcePath, fileTargetPath)
        }
    }
    else {
        // copy whole folder, then delete files from exclude
        const folderSourcePath = path.join(BASE_PATH, pack.directory)
        const folderTargetPath = path.join(SERVER_PATH, pack.directory)

        if (!existsSync(folderSourcePath)) {
            console.warn(`Folder ${folderSourcePath} does not exist`)
            continue
        }
        ensureExistsSync(folderTargetPath)
        cpSync(folderSourcePath, folderTargetPath, {
            recursive: true,
        })

        for (const file of pack.exclude || []) {
            const fileTargetPath = path.join(SERVER_PATH, pack.directory, file)
            if (existsSync(fileTargetPath)) {
                rmSync(fileTargetPath, { recursive: true })
            }
        }
    }

}
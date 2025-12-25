import path from 'path'
import serverpacks from './serverpack.json'
import { copyFileSync, existsSync, mkdirSync, unlinkSync } from 'fs'

const ensureExistsSync = (path: string) => {
    if (!existsSync(path)) {
        mkdirSync(path)
    }
}

const BASE_PATH = '.'
const SERVER_PATH = path.join(BASE_PATH, 'server')

ensureExistsSync(SERVER_PATH)

for (const pack of serverpacks) {
    const packPath = path.join(SERVER_PATH, pack.directory)
    ensureExistsSync(packPath)

    if (pack.files) {
        // only copy specified files
        for (const file of pack.files) {
            const fileSourcePath = path.join(BASE_PATH, pack.directory, file)
            const fileTargetPath = path.join(SERVER_PATH, pack.directory, file)

            ensureExistsSync(path.dirname(fileTargetPath))
            copyFileSync(fileSourcePath, fileTargetPath)
        }
    }
    else {
        // copy whole folder, then delete files from exclude
        const folderSourcePath = path.join(BASE_PATH, pack.directory)
        const folderTargetPath = path.join(SERVER_PATH, pack.directory)

        ensureExistsSync(folderTargetPath)
        copyFileSync(folderSourcePath, folderTargetPath)

        for (const file of pack.exclude || []) {
            const fileTargetPath = path.join(SERVER_PATH, pack.directory, file)
            if (existsSync(fileTargetPath)) {
                unlinkSync(fileTargetPath)
            }
        }
    }

}
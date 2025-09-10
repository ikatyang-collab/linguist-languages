import { outdent } from 'outdent'
import { PROJECT_ROOT, DATA_URLS, DATA_FILE } from './constants.mjs'
import { writeFile, fetchText, readFile } from './utilities.mjs'

async function downloadData() {
  const data = await Promise.any(
    DATA_URLS.map(async url => {
      const text = await fetchText(url)
      return outdent`
        # Data downloaded at ${new Date().toISOString()} from ${url}
        ${text}
      `
    }),
  )

  await writeFile(DATA_FILE, data, { format: false })

  return data
}

export default downloadData

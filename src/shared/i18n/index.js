/*
 *   Copyright © 2018 Teclib. All rights reserved.
 *
 *   This file is part of web-mdm-dashboard
 *
 * web-mdm-dashboard is a subproject of Flyve MDM. Flyve MDM is a mobile
 * device management software.
 *
 * Flyve MDM is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 3
 * of the License, or (at your option) any later version.
 *
 * Flyve MDM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * ------------------------------------------------------------------------------
 * @author     Gianfranco Manganiello (gmanganiello@teclib.com)
 * @author     Hector Rondon (hrondon@teclib.com)
 * @copyright  Copyright © 2018 Teclib. All rights reserved.
 * @license    GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
 * @link       https://github.com/flyve-mdm/web-mdm-dashboard
 * @link       http://flyve.org/web-mdm-dashboard
 * @link       https://flyve-mdm.com
 * ------------------------------------------------------------------------------
 */

import Polyglot from 'node-polyglot'
import language from '../language'
import sourceFile from './source_file.json'

const languageDefault = 'en_GB'

function tryRequire(path) {
  try {
    // eslint-disable-next-line
    return require(`${path}`)
  } catch (err) {
    return null
  }
}

const polyglot = new Polyglot({
  locale: language,
  phrases: tryRequire(`./translations/${language}`) || sourceFile,
})

function getTranslations(lang) {
  try {
    const json = lang === languageDefault
      ? tryRequire('./source_file.json')
      : tryRequire(`./translations/${lang}`)

    return json
  } catch (error) {
    return null
  }
}

function setPolyglot(lang) {
  localStorage.setItem('language', lang)
  const json = getTranslations(lang) || sourceFile
  polyglot.extend(json)
  polyglot.locale(lang)
}

export default {
  languageDefault,
  languageCurrent: language,
  setPolyglot,
  getTranslations,
  t: polyglot.t.bind(polyglot),
}

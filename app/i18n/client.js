'use client'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions } from './settings'
import { useEffect } from 'react'
// 
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language) => import(`./locales/${language}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    }
  })

export function useTranslation(lng, ns, options) {
  // if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng)
  useEffect( () =>{
    i18next.resolvedLanguage !== lng && i18next.changeLanguage(lng);
  }, [lng]);
  console.log(ns,options);
  return useTranslationOrg(ns, options)
}
import {globalAppSettings} from "./globalAppSettings";
export let metaModel = {
    title: '',
    description: '',
    keywords: '',
    prepareMetaInfo: function(meta){
        document.title = globalAppSettings.app.name + ' - ' + meta.title
    }
};
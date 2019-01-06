export interface Base {
    pageSize: number;
    pageNumber: number;
    pageCount: number;
    result: Atom[];
}

export interface Atom {
    classType: string;
    ui: string;
    suppressible: string;
    obsolete: string;
    rootSource: string;
    termType: string;
    code: string;
    concept: string;
    sourceConcept: string;
    sourceDescriptor: string;
    attributes: string;
    parents: string;
    ancestors: string;
    children: string;
    descendants: string;
    relations: string;
    name: string;
    language: string;
    contentViewMemberships: ContentViewMemberships[];
}

interface ContentViewMemberships {
    memberUri: string;
    uri: string;
    name: string;
}

export const ATOMS: Base = 
{
	"pageSize" : 25,
	"pageNumber" : 1,
	"pageCount" : 1,
	"result" : [{
			"classType" : "Atom",
			"ui" : "A8345234",
			"suppressible" : "false",
			"obsolete" : "false",
			"rootSource" : "ICD9CM",
			"termType" : "PT",
			"code" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/source/ICD9CM/386.11",
			"concept" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/CUI/C0155502",
			"sourceConcept" : "NONE",
			"sourceDescriptor" : "NONE",
			"attributes" : "NONE",
			"parents" : "NONE",
			"ancestors" : null,
			"children" : "NONE",
			"descendants" : null,
			"relations" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/AUI/A8345234/relations",
			"name" : "Benign paroxysmal positional vertigo",
			"language" : "ENG",
			"contentViewMemberships" : [{
					"memberUri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357/member/A8345234",
					"uri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357",
					"name" : "MetaMap NLP View"
				}
			]
		}, {
			"classType" : "Atom",
			"ui" : "A2892933",
			"suppressible" : "false",
			"obsolete" : "false",
			"rootSource" : "SNOMEDCT_US",
			"termType" : "PT",
			"code" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/source/SNOMEDCT_US/111541001",
			"concept" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/CUI/C0155502",
			"sourceConcept" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/source/SNOMEDCT_US/111541001",
			"sourceDescriptor" : "NONE",
			"attributes" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/AUI/A2892933/attributes",
			"parents" : "NONE",
			"ancestors" : null,
			"children" : "NONE",
			"descendants" : null,
			"relations" : "NONE",
			"name" : "Benign paroxysmal positional vertigo",
			"language" : "ENG",
			"contentViewMemberships" : [{
					"memberUri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357/member/A2892933",
					"uri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357",
					"name" : "MetaMap NLP View"
				}
			]
		}, {
			"classType" : "Atom",
			"ui" : "A3101021",
			"suppressible" : "false",
			"obsolete" : "false",
			"rootSource" : "SNOMEDCT_US",
			"termType" : "PT",
			"code" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/source/SNOMEDCT_US/232285008",
			"concept" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/CUI/C0155502",
			"sourceConcept" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/source/SNOMEDCT_US/232285008",
			"sourceDescriptor" : "NONE",
			"attributes" : "https://uts-ws.nlm.nih.gov/rest/content/2016AA/AUI/A3101021/attributes",
			"parents" : "NONE",
			"ancestors" : null,
			"children" : "NONE",
			"descendants" : null,
			"relations" : "NONE",
			"name" : "Benign recurrent vertigo",
			"language" : "ENG",
			"contentViewMemberships" : [{
					"memberUri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357/member/A3101021",
					"uri" : "https://uts-ws.nlm.nih.gov/rest/content-views/2016AA/CUI/C1700357",
					"name" : "MetaMap NLP View"
				}
			]
		}
	]
}
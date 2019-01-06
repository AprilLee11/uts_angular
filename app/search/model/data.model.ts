export interface Atom {
	classType: string;
	ui: string;
	suppressible: boolean;
	obsolete: boolean;
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
	definitions: string;
	name: string;
	language: string;
	contentViewMemberships: Array<ContentViewMemberships>;
}

export interface Definition {
	classType: string;
	sourceOriginated: boolean;
	rootSource: string;
	value: string;
}

export interface ContentViewMemberships {
	memberUri: string;
	uri: string;
	name: string;
}

export interface JSONBase {
	pageSize: number;
	pageNumber: number;
	pageCount: number;
  result: Object;
}

export interface AtomBase {
	pageSize: number;
	pageNumber: number;
	pageCount: number;
  	result: Array<any>;
}

export interface ConceptsBase {
	classType: string;
	results: Array<any>;
}

export class UserIn {
	id: string;
	token: string;

  constructor(id: string, token: string) {
		this.id = id;
    this.token = token;
	}
}

export class DefaultSearchParam {
	searchTerm: string;

	constructor (searchTerm: string) {
		this.searchTerm = searchTerm;
	}
}

export class SearchParam {
	searchCategory: string;
	searchType: string;
	searchValue: string;
	activeOnly: boolean;

	constructor( searchCategory: string, searchType: string, searchValue: string, activeOnly: boolean ) {
		this.searchCategory = searchCategory;
		this.searchType = searchType;
		this.searchValue = searchValue;
		this.activeOnly = activeOnly;
	}
}

export class SubsetSearchParam{
	subsetSearchValue: string;

	constructor(subsetSearchValue: string) {
		this.subsetSearchValue = subsetSearchValue;
	}
}

	export interface Concept {
		classType: string;
		ui: string;
		suppressible: boolean;
		dateAdded:string;
		majorRevisionDate: string;
		status: boolean;
		semanticTypes: Array<SemanticType>;
		atomCount: number;
		attributeCount: number;
		cvMemberCount: number;
		atoms: string;
		definitions: string;
		relations: string;
		relationCount: number;
		name: string;
	}

	export interface SemanticType {
		name: string;
		uri: string;
	}

	export interface Relation {
			classType: string;
			ui: string;
			suppressible: boolean;
			sourceUi:string;
			obsolete: boolean;
			sourceOriginated: boolean;
			rootSource: string;
			relationLabel: string;
			additionalRelationLabel: string;
			groupId: string;
			attributeCount: number;
			relatedId: string;
			relatedIdName: string;
		}

		export interface ConceptBit {
				ui: string;
				rootSource: string;
				uri: string;
				name: string;
		}

		export class AtomCluster {
			source: string;
			atombits: Array<AtomBit> = [];
			constructor( source: string )	{
				this.source = source;
			}
			putAtom(atom: AtomBit) {
				this.atombits.push(atom);
			}
	}

	export class AtomBit {
			classType: string;
			ui: string;
			suppressible: boolean;
			obsolete: boolean;
			rootSource: string;
			termType: string;
			name: string;
			code: string;

			constructor(ui: string, suppressible: boolean, obsolete:boolean, termType:string, name:string, code:string) {
				this.ui = ui;
				this.suppressible = suppressible;
				this.obsolete = obsolete;
				this.termType = termType;
				this.name = name;
				this.code = code.substr(code.lastIndexOf("/")+1, code.length);
			}
		}

		/*
		export class RootSource {
				abbreviation: string;
				expandedForm: string;
				hasChildren: boolean;
				numAtoms: number;

					constructor(abb: string, name: string, num: number) {
						this.abbreviation = abb;
						this.expandedForm = name;
						this.hasChildren = true;
						this.numAtoms = num;
					}
		}
		*/

		export interface RootSource {
				classType: string;
				abbreviation: string;
				expandedForm: string;
				family: string;
				language: Language;
				restrictionLevel: number;
				acquisitionContact: string;
				contentContact: ContentContact;
				licenseContact: LicenseContact;
				contextType: string;
				shortName: string;
				hierarchicalName: string;
				preferredName: string;
				synonymousNames: string;
		}

		export interface Subset {
			classType: string;
			ui: string;
			sourceUi: string;
			rootSource: string;
			name: string;
			description: string;
			attributeCount: number;
			atomMemberCount: number;
			sourceConceptMemberCount: number;
			relationMemberCount: number;
			uri: string;
			subsetMembers: string;
			subsetAttributes: Array<SubsetAttribute>;
		}

		export interface SubsetAttribute {
			classType: string;
			ui: string;
			sourceUi: string;
			rootSource: string;
			name: string;
			value: string;
		}

		export interface Language {
			classType: string;
			abbreviation: string;
			expandedForm: string;
		}

		export interface ContentContact {
			classType: string;
			handle: string;
			name: string;
			title: string;
			organization: string;
			address1: string;
			address2: string;
			city: string;
			stateOrProvince: string;
			country: string;
			zipCode: string;
			telephone: string;
			fax: string;
			email: string;
			url: string;
			value: string;
			/*
			constructor(classType: string, fax: string) {
				this.classType = classType;
				this.fax = fax;
			}
			*/
		}

		export interface LicenseContact {
			classType: string;
			handle: string;
			name: string;
			title: string;
			organization: string;
			address1: string;
			address2: string;
			city: string;
			stateOrProvince: string;
			country: string;
			zipCode: string;
			telephone: string;
			fax: string;
			email: string;
			url: string;
			value: string;
		}



		/*
		export class RootSource {
			classType: string;
			abbreviation: string;
			expandedForm: string;
			family: string;
			language: Language;
			restrictionLevel: number;
			acquisitionContact: string;
			contentContact: ContentContact;
			licenseContact: LicenseContact;
			contextType: string;
			shortName: string;
			hierarchicalName: string;
			preferredName: string;
			synonymousNames: string;

			constructor(classType: string, abbreviation: string, expandedForm:string, family:string, language:Language, restrictionLevel: number, acquisitionContact: string, contentContact: ContentContact, licenseContact: LicenseContact, contextType: string, shortName: string, hierarchicalName: string, preferredName: string, synonymousNames: string) {
				this.classType = classType;
				this.abbreviation = abbreviation;
				this.expandedForm = expandedForm;
				this.family = family;
				this.language = <Language>language;
				this.restrictionLevel = restrictionLevel;
				this.acquisitionContact = acquisitionContact;
				console.log(contentContact.classType + ' ' + contentContact.name + ' ' + contentContact.fax + ' ' + contentContact.url+ ' ' + contentContact.email);
				this.contentContact = new ContentContact(contentContact.classType, contentContact.fax);
				this.licenseContact = <LicenseContact>licenseContact;
				this.contextType = contextType;
				this.shortName = shortName;
				this.hierarchicalName = hierarchicalName;
				this.preferredName = preferredName;
				this.synonymousNames = synonymousNames;
				console.log(classType + ' ' + shortName + ' ' + preferredName + ' ' + contextType);
			}
		}
		*/

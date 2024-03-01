export interface JournalsEntity {
  lastStatusCheckTime: number;
  counts: {
    currentDOIs: number;
    backfileDOIs: number;
    totalDOIs: number;
  };
  breakdowns: {
    doisByIssuedYear: [number, number][];
  };
  publisher: string;
  coverage: {
    affiliationsCurrent: number;
    similarityCheckingCurrent: number;
    descriptionsCurrent: number;
    rorIdsCurrent: number;
    fundersBackfile: number;
    licensesBackfile: number;
    fundersCurrent: number;
    affiliationsBackfile: number;
    resourceLinksBackfile: number;
    orcidsBackfile: number;
    updatePoliciesCurrent: number;
    rorIdsBackfile: number;
    orcidsCurrent: number;
    similarityCheckingBackfile: number;
    referencesBackfile: number;
    descriptionsBackfile: number;
    awardNumbersBackfile: number;
    updatePoliciesBackfile: number;
    licensesCurrent: number;
    awardNumbersCurrent: number;
    abstractsBackfile: number;
    resourceLinksCurrent: number;
    abstractsCurrent: number;
    referencesCurrent: number;
  };
  title: string;
  subjects: {ASJC: number; name: string}[];
  coverageType: {
    all: {
      lastStatusCheckTime: number;
      affiliations: number;
      abstracts: number;
      orcids: number;
      licenses: number;
      references: number;
      funders: number;
      similarityChecking: number;
      awardNumbers: number;
      rorIds: number;
      updatePolicies: number;
      resourceLinks: number;
      descriptions: number;
    };
    backfile: {
      lastStatusCheckTime: number;
      affiliations: number;
      abstracts: number;
      orcids: number;
      licenses: number;
      references: number;
      funders: number;
      similarityChecking: number;
      awardNumbers: number;
      rorIds: number;
      updatePolicies: number;
      resourceLinks: number;
      descriptions: number;
    };
    current: {
      lastStatusCheckTime: number;
      affiliations: number;
      abstracts: number;
      orcids: number;
      licenses: number;
      references: number;
      funders: number;
      similarityChecking: number;
      awardNumbers: number;
      rorIds: number;
      updatePolicies: number;
      resourceLinks: number;
      descriptions: number;
    };
  };
  flags: {
    depositsAbstractsCurrent: boolean;
    depositsOrcidsCurrent: boolean;
    deposits: boolean;
    depositsAffiliationsBackfile: boolean;
    depositsUpdatePoliciesBackfile: boolean;
    depositsSimilarityCheckingBackfile: boolean;
    depositsAwardNumbersCurrent: boolean;
    depositsResourceLinksCurrent: boolean;
    depositsRorIdsCurrent: boolean;
    depositsArticles: boolean;
    depositsAffiliationsCurrent: boolean;
    depositsFundersCurrent: boolean;
    depositsReferencesBackfile: boolean;
    depositsRorIdsBackfile: boolean;
    depositsAbstractsBackfile: boolean;
    depositsLicensesBackfile: boolean;
    depositsAwardNumbersBackfile: boolean;
    depositsDescriptionsCurrent: boolean;
    depositsReferencesCurrent: boolean;
    depositsResourceLinksBackfile: boolean;
    depositsDescriptionsBackfile: boolean;
    depositsOrcidsBackfile: boolean;
    depositsFundersBackfile: boolean;
    depositsUpdatePoliciesCurrent: boolean;
    depositsSimilarityCheckingCurrent: boolean;
    depositsLicensesCurrent: boolean;
  };
  ISSN: string[];
  issnType: {value: string; type: string}[];
}

export interface JournalsSearchResponse {
  'items-per-page': number;
  query: {
    'start-index': number;
    'search-terms': string;
  };
  'total-results': number;
  items: JournalsEntity[];
}

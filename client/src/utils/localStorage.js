export const getSavedJobIds = () => {
    const getSavedJobIds = localStorage.getItem('saved_jobs')
        ? JSON.parse(localStorage.getItem('saved_jobs'))
        : [];


    return getSavedJobIds;
};

export const saveJobIds = (jobIDArr) => {
    if (jobIDArr.length) {
        localStorage.setItem('saved_jobs', JSON.stringify(jobIDArr));
    } else {
        localStorage.removeItem('saved_jobs');
    }
};

export const removeJobId = (jobId) => {
    const saveJobIds = localStorage.getItem('saved_jobs')
        ? JSON.parse(localStorage.getItem
            ('saved_jobs'))
        : null;

    if (!savedJobIds) {
        return false;
    }

    const updatedSavedJobIds = savedJobIds?.
        filter((savedJobId) => savedJobId !==
            jobId);
    localStorage.setItem('saved_jobs', JSON.stringify(updatedSavedJobIds));

    return true;

};
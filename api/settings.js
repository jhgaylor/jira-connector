"use strict";

module.exports = SettingsClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/settings'
 * @param {JiraClient} jiraClient
 * @constructor SettingsClient
 */
function SettingsClient(jiraClient) {
    this.jiraClient = jiraClient;

    /**
     * Sets the base URL that is configured for this JIRA instance.
     *
     * @method setBaseUrl
     * @memberOf {SettingsClient#}
     * @param opts The request options sent to the Jira API.
     * @param opts.newUrl The new base url.
     * @param callback Called when the base url has been set.
     */
    this.setBaseUrl = function (opts, callback) {
        var options = {
            uri: this.jiraClient.buildURL('/settings/baseUrl'),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: opts.newUrl
        };

        this.jiraClient.makeRequest(options, callback);
    };

    /**
     * Returns the default system columns for issue navigator. Admin permission will be required.
     *
     * @method getIssueNavColumns
     * @membrOf {SettingsClient#}
     * @param opts Ignored
     * @param callback Called when the columns have been retrieved
     */
    this.getIssueNavColumns = function (opts, callback) {
        var options = {
            uri: this.jiraClient.buildURL('/settings/columns'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        this.jiraClient.makeRequest(options, callback);
    };
}
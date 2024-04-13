// A file including all the classes that will be used in the project, used for the class diagram in the d1.


//////////////////////// DTOs ////////////////////////

/**
 * @typedef TaskTree
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {TaskTree[]} childTasks - The child tasks of the task
 */
class TaskTree{

    /**
     * @param {number} taskId 
    */
    constructor(taskId){
        this.taskId = taskId;
        this.childTasks = [];
    }
}

const TASK_STATUS = {
    Idea: 1,
    Planned: 2,
    InProgress: 3,
    Ready: 4,
    Deployed: 5,
    Paused: 6,
}


/**
 * @typedef TaskNote
 * @type {Object}
 * @property {number} noteId - The id of the note
 * @property {number} taskId - The id of the task the notes are for
 * @property {string} notes - The note itself
 * @property {Date} date - The date when the note was last edited
 */
class TaskNote{

    /**
     * @param {number} noteId
     * @param {number} taskId
     * @param {string} notes
     * @param {Date} date
    */
    constructor(noteId, taskId, notes, date){
        this.noteId = noteId;
        this.taskId = taskId;
        this.notes = notes;
        this.date = date; 
    }
}

const REPORT_TYPE = {
    Manual: 1,
    Automatic: 2,
}

const REPORT_FREQUENCY = {
    Daily: 1,
    Weekly: 2,
    Monthly: 3,
    Yearly: 4,
}

/**
 * @typedef TaskReportSchedule
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number} reportScheduleId - The id of the report schedule
 * @property {number} reportType - The type of the report
 * @property {number} reportFrequency - The frequency of the report
 * @property {Date} nextReportDate - The date when the report begins
 * @property {string} reportPrompt - The prompt/question for the report
 */
class TaskReportSchedule{
    /**
     * @param {number} taskId
     * @param {number} reportScheduleId
     * @param {number} reportType
     * @param {number} reportFrequency
     * @param {Date} nextReportDate 
     * @param {string} reportPrompt
    */
    constructor(taskId, reportScheduleId, reportType, reportFrequency, nextReportDate, reportPrompt){
        this.taskId = taskId;
        this.reportScheduleId = reportScheduleId;
        this.reportType = reportType;
        this.reportFrequency = reportFrequency;
        this.nextReportDate = nextReportDate ;
        this.reportPrompt = reportPrompt;
    }
}

/**
 * @typedef Task
 * @type {Object}
 * @property {number} taskId - The id of the task
 * @property {number | null} taskFatherId - The id of the father task
 * @property {Date} lastUpdated - The date when the task was last updated
 * @property {string} taskName - The name of the task
 * @property {string} taskDescription - The description of the task
 * @property {number} taskStatus - The status of the task
 * @property {TaskNote[]} taskNotes - The notes of the task
 * @property {number[]} taskAssignees - A list containing the ids of the assignees for the current task 
 * @property {number} taskManager - The id of the manager 
 * @property {number} taskOrganization - The id of the organization 
 * @property {TaskReportSchedule[]} taskReports - The reports of the task
 * @property {bool} notificationEnable - whether to send notification to the manager when the status of the task changes or not
 */
class Task{
    /**
     * @param {number} taskId 
     * @param {number | null} taskFatherId 
     * @param {number} taskOrganization
     * @param {Date} lastUpdated 
     * @param {string} taskName 
     * @param {string} taskDescription 
     * @param {number} taskStatus 
     * @param {TaskNote[]} taskNotes 
     * @param {number | number[]} taskAssignee 
     * @param {number} taskManager 
     * @param {TaskReportSchedule[]} taskReports
     * @param {bool} notificationEnable
     */
    constructor(
        taskId,
        taskFatherId,
        taskOrganization,
        lastUpdated,
        taskName,
        taskDescription,
        taskStatus,
        taskNotes,
        taskAssignee,
        taskManager,
        taskReports,
        notificationEnable
    ){
        this.taskId = taskId;
        this.taskFatherId = taskFatherId;
        this.taskOrganization = taskOrganization;
        this.lastUpdated = lastUpdated;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStatus = taskStatus;
        this.taskNotes = taskNotes;
        if(taskAssignee.constructor === Array){
            this.taskAssignees = taskAssignee;
        }else{
            this.taskAssignees = [taskAssignee];
        }
        this.taskManager = taskManager;
        this.taskReports = taskReports;
        this.notificationEnable = notificationEnable;
    }
}

/**
 * @typedef Notification
 * @type {Object}
 * @property {number} notificationId - The id of the notification
 * @property {number} userId - The id of the user that the notification is for
 * @property {string} notificationText - The text of the notification
 * @property {Date} date - The date when the notification was created
 * @property {boolean} read - If the notification was read or not
 */
class Notification{
    
    /**
     * @param {number} notificationId
     * @param {number} userId
     * @param {string} notificationText
     * @param {Date} date
     * @param {boolean} read
    */
    constructor(notificationId, userId, notificationText, date, read){
        this.notificationId = notificationId;
        this.userId = userId;
        this.notificationText = notificationText;
        this.date = date;
        this.read = read;
    }
}

/**
 * @typedef Organization
 * @type {Object}
 * @property {number} organizationId - The id of the organization
 * @property {string} organizationName - The name of the organization
 * @property {number[]} userIds - The ids of the users in the organization
 * @property {boolean} licenseValid - If the license of the organization is valid
 * @property {Date} licenseExpirationDate - The date when the license expires
 * @property {number} ownerId - The id of the owner of the organization
 */
class Organization{
    /**
     * @param {number} organizationId 
     * @param {string} organizationName 
     * @param {number[]} userIds 
     * @param {boolean} licenseValid 
     * @param {Date} licenseExpirationDate
     * @param {number} ownerId
     */
    constructor(organizationId, organizationName, userIds, licenseValid, licenseExpirationDate ,ownerId){
        this.organizationId = organizationId;
        this.organizationName = organizationName;
        this.userIds = userIds;
        this.licenseValid = licenseValid;
        this.licenseExpirationDate = licenseExpirationDate;
        this.ownerId = ownerId;
    }
}


const USER_KIND = {
    Custom: 1,
    Google: 2,
    Facebook: 3
}

/**
 * @typedef User
 * @type {Object}
 * @property {number} userId - The id of the user
 * @property {string} userName - The name of the user
 * @property {number[]} organizations - The ids of the organizations that the user is in
 * @property {number} userKind - The kind of the user (Custom, Google, Facebook)
 * @param {string} email - The email of the user
 */
class User{
    /**
     * @param {number} userId
     * @param {string} userName
     * @param {number[]} organizations
     * @param {number} userKind
     * @param {string} email
     */
    constructor(userId, userName, organizations, userKind, email){
        this.userId = userId;
        this.userName = userName;
        this.organizations = organizations;
        this.userKind = userKind;
        this.email = email;
    }
}

/**
 * @typedef GoogleUserInfo
 * @type {Object}
 */
class GoogleUserInfo{
    constructor(){
    }
}

/**
 * @typedef FacebookUserInfo
 * @type {Object}
 */
class FacebookUserInfo{
    constructor(){
    }
}

/**
 * @typedef CustomUserInfo
 * @type {Object}
 */
class CustomUserInfo{
    constructor(){
    }
}



//////////////////////// Response ////////////////////////

/**
 * Represents a generic response with a status code and payload.
 * @template T
 * @property {number} statusCode - The status code of the response
 * @property {string} message - The message of the response
 * @property {T} payload - The payload of the response
 */
class CustomResponse {
    /**
     * @param {number} statusCode
     * @param {string} message
     * @param {T} payload
    */
    constructor(statusCode, message, payload){
        this.statusCode = statusCode;
        this.message = message;
        this.payload = payload;
    }
}


//////////////////////// DataBase ////////////////////////

/**
 * @typedef dataBaseManager
 * @type {Object}
 * @property {MongoClient} client - The official MongoDB driver for Node.js 
 */
class dataBaseManager{
    constructor(uri){
        self.client = new MongoClient(uri);
    }
}




class taskManager extends dataBaseManager{

    //////////////////////////// Creation ////////////////////////////

    /**
     * Create a new task in the database, the id of the task will be automatically generated
     * return the id of the task created
     * @param {number} organizationId
     * @param {Task} task 
     * @returns {CustomResponse<number>}
     */
    createTask(organizationId, task){
    }
    
    /**
     * Create new note to the task.
     * The note's date will be automatically set to the current time in the server
     * The note's id will be automatically generated
     * Return the id of the note created
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {string} notes 
     * @returns {CustomResponse<number>}
     */
    createTaskNotes(organizationId, taskId, notes){
    }

    /**
     * Create a new report schedule for the desired task
     * return the id of the report schedule
     * @param {number} organizationId
     * @param {*} taskId 
     * @param {*} taskReportSchedule 
     * @returns {CustomResponse<number>}
     */
    createTaskReportSchedule(organizationId, taskId, taskReportSchedule){
    }
    

    //////////////////////////// Updating ////////////////////////////

    /**
     * Update the task with the given id with the new task that is passed
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {Task} newTask 
     * @returns {Response}
     */
    updateTask(organizationId, taskId, newTask){
    }

    /**
     * Update the last updated date of the task with the given id to the current time in the server 
     * @param {number} organizationId
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    updateTaskLastUpdated(organizationId, taskId){
    }

    /**
     * Update the name of the task with the given id to the new name that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {string} newName
     * @returns {CustomResponse<void>}
     */
    updateTaskName(organizationId, taskId, newName){
    }

    /**
     * Update the description of the task with the given id to the new description that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {string} newDescription
     * @returns {CustomResponse<void>}
     */
    updateTaskDescription(organizationId, taskId, newDescription){
    }

    /**
     * Update the status of the task with the given id to the new status that is passed 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} newStatus 
     */
    updateTaskStatus(organizationId, taskId, newStatus){
    }

    /**
     * Update the notes of a task.
     * The note's date will be automatically set to the current time in the server 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} noteId 
     * @param {string} newNotes 
     * @returns {CustomResponse<void>}
     */
    updateTaskNotes(organizationId, taskId, noteId, newNotes){
    }

    /**
     * Update the assignees of the task with the given id to the new assignees that are passed 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number[]} assignees 
     * @returns {CustomResponse<void>}
     */
    updateTaskAssignees(organizationId, taskId, assignees){
    }

    /**
     * Add a new assignee to the task, if it doesn't exist already
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} assignee 
     * @returns {CustomResponse<void>}
     */
    addNewAssignee(organizationId, taskId, assignee){
    }

    /**
     * Update the manager of the task with the given id to the new manager that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} newManager
     * @returns {CustomResponse<void>}
     */
    updateTaskManager(organizationId, taskId, newManager){
    }

    /**
     * Update specified task report schedule 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} reportId 
     * @param {TaskReportSchedule} newReport 
     * @returns {CustomResponse<void>}
     */
    updateTaskReport(organizationId, taskId, reportId, newReport){
    }

    /**
     * Enable the notifications for the task with the given id 
     * @param {number} organizationId
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    enableNotification(organizationId, taskId){
    }
    
    /**
     * Disable the notifications for the task with the given id 
     * @param {number} organizationId
     * @param {number} taskId 
     * @returns {CustomResponse<void>}
     */
    disableNotification(organizationId, taskId){
    }

    //////////////////////////// Deleting ////////////////////////////

    /**
     * Delete the task with the given id 
     * @param {number} organizationId
     * @param {number} taskId 
     * @returns {Response}
     */
    deleteTask(organizationId, taskId){
    }

    /**
     * Delete the note with the given id from the task with the given id
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} noteId
     * @returns {CustomResponse<void>}
     */
    deleteTaskNotes(organizationId, taskId, noteId){
    }

    /**
     * Delete the assignee with the given id from the task with the given id
     * Can return an error if you are trying to delete the last assignee of the task
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} assigneeId
     * @returns {CustomResponse<void>}
     */
    deleteTaskAssignee(organizationId, taskId, assigneeId){
    } 

    /**
     * Delete the report with the given id from the task with the given id
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} reportId 
     */
    deleteTaskReportSchedule(organizationId, taskId, reportId){
    }

    //////////////////////////// Reading ///////////////////////////
    
    /**
     * Return one single task
     * @param {number} organizationId 
     * @param {number} takId 
     * @returns {CustomResponse<Task>}
     */
    readTask(organizationId, taskId){
    }
   
    /**
     * return a list, containing all the task trees that a user can see inside one organization 
     * @param {number} organizationId 
     * @param {number} userId 
     * @returns {CustomResponse<TaskTree[]>}
     */
    readTaskTreesForUser(organizationId, userId){
    }
}


class userManager extends dataBaseManager{

    //////////////////////////// Creation ////////////////////////////

    /**
     * Create a new user in the database, the id of the user will be automatically generated
     * return the id of the user created
     * @param {User} user 
     * @returns {CustomResponse<number>}
     */
    createUser(user){
    }

    /**
     * Create a new notification in the database, the id of the notification will be automatically generated 
     * return the id of the notification created
     * @param {number} userId 
     * @param {Notification} notification 
     * @returns {CustomResponse<number>}
     */
    createNotification(userId, notification){
    }

    //////////////////////////// Updating ////////////////////////////

    /**
     * Update the name of the user with the given id to the new name that is passed
     * @param {number} userId
     * @param {string} newName
     * @returns {CustomResponse<void>}
     */
    updateUserName(userId, newName){
    }

    /**
     * Add a user to an organization
     * @param {number} organizationId
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    addUserToOrganization(organizationId, userId){
    }

    /**
     * Mark a notification as read 
     * @param {number} userId 
     * @param {number} notificationId 
     * @returns {CustomResponse<void>}
     */
    markNotificationAsRead(userId, notificationId){
    }


    //////////////////////////// Deleting ////////////////////////////

    /**
     * Delete the user with the given id 
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    deleteUser(userId){
    }
    

    /**
     * Remove a user from an organization
     * @param {number} organizationId
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    removeUserFromOrganization(organizationId, userId){
    }


    /**
     * Delete the notification with the given id 
     * @param {number} userId 
     * @param {number} notificationId 
     * @returns {CustomResponse<void>}
     */
    deleteNotification(userId, notificationId){
    }

    //////////////////////////// Reading ///////////////////////////
    /**
     * Return one single user
     * @param {number} userId
     * @returns {CustomResponse<User>}
     */
    readUser(userId){
    }

    /**
     * Return a list of all the notifications that the user has 
     * @param {number} userId 
     * @returns {CustomResponse<Notification[]>}
     */
    readUserNotifications(userId){
    }

    ////////////////////////// Authentication ////////////////////////

    /**
     * @param {number} userId 
     * @param {CustomUserInfo} customUserInfo 
     * @returns {CustomResponse<void>}
     */
    CreateCustomUserInfo(userId, customUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {FacebookUserInfo} facebookUserInfo 
     * @returns {CustomResponse<void>}
     */
    CreateFacebookUserInfo(userId, facebookUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {GoogleUserInfo} googleUserInfo 
     * @returns {CustomResponse<void>}
     */
    CreateGoogleUserInfo(userId, googleUserInfo){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<CustomUserInfo>}
     */
    readCustomUserInfo(userId){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<FacebookUserInfo>}
     */
    readFacebookUserInfo(userId){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<GoogleUserInfo>}
     */
    readGoogleUserInfo(userId){
    }

    /**
     * @param {number} userId 
     * @param {CustomUserInfo} newCustomUserInfo 
     */
    updateCustomUserInfo(userId, newCustomUserInfo){
    }
    
    /**
     * @param {number} userId 
     * @param {FacebookUserInfo} newFacebookUserInfo 
     */
    updateFacebookUserInfo(userId, newFacebookUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {GoogleUserInfo} newGoogleUserInfo 
     */
    updateGoogleUserInfo(userId, newGoogleUserInfo){
    }

    /**
     * @param {number} userId 
     */
    deleteCustomUserInfo(userId){
    }

    /**
     * @param {number} userId 
     */
    deleteFacebookUserInfo(userId){
    }

    /**
     * @param {number} userId 
     */
    deleteGoogleUserInfo(userId){
    }
}

class organizationManager extends dataBaseManager{

    //////////////////////////// Creation ////////////////////////////

    /**
     * Create a new organization in the database, the id of the organization will be automatically generated
     * return the id of the organization created
     * @param {Organization} organization 
     * @returns {CustomResponse<number>}
     */
    createOrganization(organization){
    }

    //////////////////////////// Updating ////////////////////////////

    /**
     * Update the name of the organization with the given id to the new name that is passed
     * this function will also edit the profile of the user to add the organization to the user's profile
     * @param {number} organizationId
     * @param {string} newName
     * @returns {CustomResponse<void>}
    */
    addUserToOrganization(organizationId, userId){
    }

    /**
     * Update the license of the organization with the given id to the new license that is passed
     * @param {number} organizationId
     * @param {boolean} newLicense
     * @returns {CustomResponse<void>}
     */
    updateLicense(organizationId, newLicense){
    }

    /**
     * Update the license expiration date of the organization with the given id to the new date that is passed
     * @param {number} organizationId
     * @param {Date} newDate
     * @returns {CustomResponse<void>}
     */
    updateLicenseExpirationDate(organizationId, newDate){
    }

    //////////////////////////// Deleting ////////////////////////////

    /**
     * Delete the organization with the given id 
     * @param {number} organizationId 
     * @returns {CustomResponse<void>}
     */
    deleteOrganization(organizationId){
    }

    /**
     * Remove a user from an organization
     * Can return an error if the user is the owner of the organization
     * This function will also update the profile of the user remove the organization from the user's profile
     * @param {number} organizationId
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    removeUserFromOrganization(organizationId, userId){
    }
    
    //////////////////////////// Reading ///////////////////////////

    /**
     * Return one single organization
     * @param {number} organizationId 
     * @returns {CustomResponse<Organization>}
     */
    readOrganization(organizationId){
    }
}
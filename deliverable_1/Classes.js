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

const TaskStatus= {
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

const ReportType= {
    Manual: 1,
    Automatic: 2,
}

const reportFrequency= {
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
 * @property {number} taskOrganizationId - The id of the organization 
 * @property {TaskReportSchedule[]} taskReports - The reports of the task
 * @property {bool} notificationEnable - whether to send notification to the manager when the status of the task changes or not
 * @property {number[]} childTasks - The ids of the child tasks 
 * @property {number} recusivePermissionsValue - Now far down the task tree the permissions of the task are inherited
 */
class Task{
    /**
     * @param {number} taskId 
     * @param {number | null} taskFatherId 
     * @param {number} taskOrganizationId
     * @param {Date} lastUpdated 
     * @param {string} taskName 
     * @param {string} taskDescription 
     * @param {number} taskStatus 
     * @param {TaskNote[]} taskNotes 
     * @param {number | number[]} taskAssignee 
     * @param {number} taskManager 
     * @param {TaskReportSchedule[]} taskReports
     * @param {bool} notificationEnable
     * @param {number[]} childTasksIds
     * @param {number} recursivePermissionsValue
     */
    constructor(
        taskId,
        taskFatherId,
        taskOrganizationId,
        lastUpdated,
        taskName,
        taskDescription,
        taskStatus,
        taskNotes,
        taskAssignee,
        taskManager,
        taskReports,
        notificationEnable,
        childTasksIds,
        recursivePermissionsValue
    ){
        this.taskId = taskId;
        this.taskFatherId = taskFatherId;
        this.taskOrganizationId = taskOrganizationId;
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
        this.childTasksIds = childTasksIds;
        this.recursivePermissionsValue = recursivePermissionsValue;
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


const UserKind = {
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
class DataBaseManager{
    constructor(uri){
        self.client = new MongoClient(uri);
    }
}




class TaskManager extends DataBaseManager{

    //////////////////////////// ieation ////////////////////////////

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
     * @param {number} taskId 
     * @param {TaskReportSchedule} taskReportSchedule 
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

    /**
     * Add a child task to the task with the given id
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} childTaskId
     * @returns {CustomResponse<void>}
     */
    addChildTask(organizationId, taskId, childTaskId){
    }

    /**
     * Update the recursive permissions value of the task with the given id to the new value that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} newRecursivePermissionsValue
     * @returns {CustomResponse<void>}
    */
    updateTaskRecursivePermissionsValue(organizationId, taskId, newRecursivePermissionsValue){}

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
     * @returns {CustomResponse<void>}
     */
    deleteTaskReportSchedule(organizationId, taskId, reportId){
    }

    /**
     * Remove a child task from the task with the given id
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} childTaskId
     * @returns {CustomResponse<void>}
     */
    removeChildTask(organizationId, taskId, childTaskId){
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

}


class UserManager extends DataBaseManager{

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
     * @returns {CustomResponse<number>}
    */
    createCustomUserInfo(userId, customUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {FacebookUserInfo} facebookUserInfo 
     * @returns {CustomResponse<number>}
     */
    createFacebookUserInfo(userId, facebookUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {GoogleUserInfo} googleUserInfo 
     * @returns {CustomResponse<number>}
     */
    createGoogleUserInfo(userId, googleUserInfo){
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
     * @returns {CustomResponse<void>}
     */
    updateCustomUserInfo(userId, newCustomUserInfo){
    }
    
    /**
     * @param {number} userId 
     * @param {FacebookUserInfo} newFacebookUserInfo 
     * @returns {CustomResponse<void>}
     */
    updateFacebookUserInfo(userId, newFacebookUserInfo){
    }

    /**
     * @param {number} userId 
     * @param {GoogleUserInfo} newGoogleUserInfo 
     * @returns {CustomResponse<void>}
     */
    updateGoogleUserInfo(userId, newGoogleUserInfo){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    deleteCustomUserInfo(userId){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    deleteFacebookUserInfo(userId){
    }

    /**
     * @param {number} userId 
     * @returns {CustomResponse<void>}
     */
    deleteGoogleUserInfo(userId){
    }
}

class OrganizationManager extends DataBaseManager{

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

///////////////////// Base Class Services /////////////////////////

const PermissionKind = {
    Read: 1,
    Write: 2
}

/**
 * @typedef ServicesBaseClass
 * @type {Object}
 * @property {TaskManager} taskManager - The task manager class to edit the database
 * @property {OrganizationManager} organizationManager - The organization manager class to edit the database
 * @property {UserManager} userManager - The user manager class to edit the database
 * 
 */
class ServicesBaseClass{
    constructor() {
        this.taskManager = new TaskManager(); 
        this.organizationManager = new OrganizationManager();
        this.userManager = new UserManager();
    }

    /**
     * verify that a user has a permission to do a particular action on a task 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} userId 
     * @param {string} userToken
     * @param {number} permission 
     * @returns {CustomResponse<bool>}
     */
    verifyTaskPermission(organizationId, taskId, userId, userToken, permission){
    }

    /**
     * verify that a user is really hwo they say they are, by comparing the token given to the token in the database
     * @param {number} userId 
     * @param {string} userToken
     * @returns {CustomResponse<bool>}
     */
    verifyAccount(userId, userToken){
    }


    /**
     * verify that a user has a permission to do a particular action on an organization 
     * @param {number} organizationId 
     * @param {number} userId 
     * @param {number} userToken 
     * @param {number} permission 
     */
    verifyOrganizationPermission(organizationId, userId, userToken, permission){
    }

}


///////////////////// NOTIFICATION SYSTEM ///////////////////////

class ExternalNotificationManager extends ServicesBaseClass{
    
    /**
     * 
     * @param {number} notificationId 
     * @param {number} userId 
     * @param {string} notificationText 
     * @param {Date} date 
     * @param {boolean} read
     * @returns {CustomResponse<void>}
     */
    sendNotification(notificationId, userId, notificationText, date, read){
    }
}

class InternalNotificationManager extends ServicesBaseClass{

    /**
     * 
     * @param {number} notificationId 
     * @param {number} userId 
     * @param {number} userToken
     * @returns {CustomResponse<void>}
     */
    deleteNotification(notificationId, userId, userToken){
    }

    /**
     * 
     * @param {number} notificationId 
     * @param {number} userId 
     * @param {number} userToken
     * @returns {CustomResponse<void>}
     */
    markNotificationAsRead(notificationId, userId, userToken){
    }

    /**
     * 
     * @param {number} notificationId 
     * @param {number} userId 
     * @param {number} userToken
     * @returns {CistomRespomse<Notification>}
     */
    getNotificationDetails(notificationId, userId, userToken){
    }

    /** 
     * @param {number} userId 
     * @param {number} userToken
     * @returns {CustomResponse<Notification[]>}
     */
    getNotificationList(userId, userToken){
    }
}

class NotificationManager extends ServicesBaseClass{

    constructor(){
        super();
        this.externalNotificationManager = new ExternalNotificationManager();
        this.internalNotificationManager = new InternalNotificationManager();
    }

    /**
     * 
     * @param {number} notificationId 
     * @param {number} userId 
     * @param {string} notificationText 
     * @param {Date} date 
     * @param {boolean} read 
     * @returns {CustomResponse<void>}
     */
    sendNotification(notificationId, userId, notificationText, date, read){
    }
}


///////////////////// TASK MANAGER /////////////////////////


class TaskGetter extends ServicesBaseClass{
    
    /**
     * returns the task trees a user can see inside an organization 
     * @param {number} organizationId 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<TaskTree[]>}
     */
    getTasksForUser(organizationId, userId, userToken){
    }

    /**
     * returns the task with the given id
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} userId
     * @param {string} userToken
     * @returns {CustomResponse<Task>}
     */
    getTask(organizationId, taskId, userId, userToken){
    }
}

class TaskCreator extends ServicesBaseClass{


    /*    
     * Create a new task in the database, the id of the task will be automatically generated
     * return the id of the task created
     * @param {number} organizationId
     * @param {Task} task
     * @param {number} userId
     * @param {string} userToken
     */
    createTask(organizationId, task, userId, userToken){
    }
    
    /**
     * Create new note to the task.
     * The note's date will be automatically set to the current time in the server
     * The note's id will be automatically generated
     * Return the id of the note created
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {string} notes 
     * @param {number} userId
     * @param {string} userToken
     * @returns {CustomResponse<number>}
     */
    createTaskNotes(organizationId, taskId, notes, userId, userToken){
    }

}

class TaskEditor extends ServicesBaseClass{

    /**
     * Delete the task with the specify ID, and all the sub tasks.
     * @param {number} organizationId 
     * @param {number} taskId 
     * @param {number} userId 
     * @param {string} userToken 
     * @return {CustomResponse<void>}
     */
    deleteTask(organizationId, taskId, userId, userToken){
    }


    /**
     * Delete the assignee with the given id from the task with the given id
     * Can return an error if you are trying to delete the last assignee of the task
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} assigneeId
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    deleteTaskAssignee(organizationId, taskId, assigneeId, userId, userToken){
    } 

    
    /**
     * Delete the note with the given id from the task with the given id
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} noteId
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    deleteTaskNotes(organizationId, taskId, noteId, userId, userToken, userId, userToken){
    }

    /**
     * Update the task with the given id with the new task that is passed
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {Task} newTask 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {Response}
     */
    updateTask(organizationId, taskId, newTask, userId, userToken){
    }

    /**
     * Update the name of the task with the given id to the new name that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {string} newName
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    updateTaskName(organizationId, taskId, newName, userId, userToken){
    }

    /**
     * Update the description of the task with the given id to the new description that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {string} newDescription
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    updateTaskDescription(organizationId, taskId, newDescription, userId, userToken){
    }

    /**
     * Update the status of the task with the given id to the new status that is passed 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} newStatus 
     * @param {number} userId 
     * @param {string} userToken 
     */
    updateTaskStatus(organizationId, taskId, newStatus, userId, userToken){
    }

    /**
     * Update the notes of a task.
     * The note's date will be automatically set to the current time in the server 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} noteId 
     * @param {string} newNotes 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    updateTaskNotes(organizationId, taskId, noteId, newNotes, userId, userToken){
    }

    /**
     * Update the assignees of the task with the given id to the new assignees that are passed 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number[]} assignees 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    updateTaskAssignees(organizationId, taskId, assignees, userId, userToken){
    }

    /**
     * Add a new assignee to the task, if it doesn't exist already
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} assignee 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    addNewAssignee(organizationId, taskId, assignee, userId, userToken){
    }

    /**
     * Update the manager of the task with the given id to the new manager that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} newManager
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    updateTaskManager(organizationId, taskId, newManager, userId, userToken){
    }

    /**
     * Enable the notifications for the task with the given id 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    enableNotification(organizationId, taskId, userId, userToken){
    }
    
    /**
     * Disable the notifications for the task with the given id 
     * @param {number} organizationId
     * @param {number} taskId 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    disableNotification(organizationId, taskId, userId, userToken){
    }

    /**
     * Update the recursive permissions value of the task with the given id to the new value that is passed
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} newRecursivePermissionsValue
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
    */
    updateTaskRecursivePermissionsValue(organizationId, taskId, newRecursivePermissionsValue, userId, userToken){}
}


//////////////////////// User Manager /////////////////////////

/**
 * @typedef OauthLogInInfo
 * @type {Object}
 * @property {string} redirectUrl - The url to redirect the user to after the login
 * @property {string} clientId - The id of the client
 */
class OauthLogInInfo{
    constructor(){
    }
}

/**
 * @typedef LogInResponse
 * @type {Object}
 * @property {number} userId - The id of the user
 * @property {string} userToken - The token of the user, will be used to authorize the successive requests.
 */
class LogInResponse{
    constructor(userId, userToken){
        this.userId = userId;
        this.userToken = userToken;
    }
}


class AccountManager extends ServicesBaseClass{

    /**
     * find a user id starting from a name
     * @param {string} name 
     * @returns {CustomResponse<number>}
     */
    findUserByName(name){
    }

    /**
     * @returns {CustomResponse<OauthLogInInfo>}
     */
    getGoogleOauthLogInInfo(){
    }

    /**
     * @returns {CustomResponse<OauthLogInInfo>}
     */
    getFacebookOauthLogInInfo(){
    }

    /**
     * @param {?string} userName 
     * @param {?string} userPassword 
     * @returns {CustomResponse<LogInResponse>}
     */
    customLogIn(userName, userPassword){
    }
    
    /**
     * @param {string} oauthCode 
     * @returns {CustomResponse<LogInResponse>}
     */
    googleLogIn(oauthCode){
    }
    
    /**
     * @param {string} oauthCode 
     * @returns {CustomResponse<LogInResponse>}
     */
    facebookLogIn(oauthCode){
    }

    /**
     * return true if the user was created successfully, false if the user already exists
     * @param {?string} userName 
     * @param {?string} userPassword 
     * @returns {CustomResponse<LogInResponse>}
     */
    customSignIn(userName, userPassword){
    }
    
    /**
     * return true if the user was created successfully, false if the user already exists
     * @param {string} oauthCode 
     * @returns {CustomResponse<bool>}
     */
    googleSignIn(oauthCode){
    }
    
    /**
     * return true if the user was created successfully, false if the user already exists
     * @param {string} oauthCode 
     * @returns {CustomResponse<bool>}
     */
    facebookSignIn(oauthCode){
    }
    /**
     * register a user with a custom account
     * return true if the user was created successfully, false if the user already exists
     * @param {?string} userName 
     * @param {?string} userPassword 
     * @param {?string} oauthToken 
     * @returns {CustomResponse<bool>}
     */
    signIn(userName, userPassword, oauthToken){
    }

    /**
     * @param {newUserName} userId 
     * @param {string} userToken 
     * @param {string} newUserName 
     * @returns {CustomResponse<void>}
     */
    editUserName(userId, userToken, newUserName){
    }
 
    /**
     * @param {newUserName} userId 
     * @param {string} userToken 
     * @param {string} newPassword 
     * @returns {CustomResponse<void>}
     */
    changePassword(userId, userToken, newPassword){
    }

    /**
     * @param {number} userId
     * @param {string} userToken
     * @returns {CustomResponse<void>} 
     */
    deleteAccount(userId, userToken){
    }
}


////////////////// Organization Manager //////////////////////

class OrganizationSubscriptionManager extends ServicesBaseClass{

    /**
     * @param {number} organizationId
     * @returns {CustomResponse<number>}
     */
    calculateSubscriptionPrice(organizationId){
    }

    /**
     * 
     * @param {number} organizationId 
     * @param {number} userId 
     * @param {string} userToken 
     * @param {string} paymentInfo 
     */
    paySubscription(organizationId, userId, userToken, paymentInfo){
    }

    /**
     * returns true if the organization has a valid subscription
     * @param {number} organizationId
     * @returns {CustomResponse<bool>}
     */
    verifySubscription(organizationId){
    }
}

class OrganizationEditor extends ServicesBaseClass{
    
    /** 
     * @param {number} organizationId 
     * @param {number} userToAddId 
     * @param {number} userId 
     * @param {number} userToken 
     * @returns {CustomResponse<void>}
     */
    addUserToOrganization(organizationId, userToDeleteId, userId, userToken){
    }
    
    /** 
     * @param {number} organizationId 
     * @param {number} userToDeleteId 
     * @param {number} userId 
     * @param {number} userToken 
     * @returns {CustomResponse<void>}
     */
    removeUserFromOrganization(organizationId, userToAddId, userId, userToken){
    }

}


////////////////////////// REPORTS ////////////////////////////

class AutomaticReportManager extends ServicesBaseClass{
    generateAutomaticReports(organizationId, taskId, reportPrompt){
    }
}


class ManualReportManager extends ServicesBaseClass{
    generateAutomaticReports(organizationId, taskId, reportPrompt){
    }
}

class ReportManager extends ServicesBaseClass{

    constructor(){
        super();
        this.automaticReportManager = new AutomaticReportManager();
        this.manualReportManager = new ManualReportManager();
    }

    generateReport(organizationId, taskId, reportPrompt, reportKind, userId, userToken){
    }
} 


class reportScheduler extends ServicesBaseClass{
    /**
     * 
     * @param {number} organizationId 
     * @param {number} taskId 
     * @param {string} reportPrompt 
     * @param {number} reportKind 
     * @param {number} reportFrequency 
     * @param {number} userId 
     * @param {string} userToken 
     * @returns {CustomResponse<void>}
     */
    scheduleReport(organizationId, taskId, reportPrompt, reportKind, reportFrequency, userId, userToken){
    }

    /**
     * return a list of all the report schedules for a task
     * @param {number} organizationId 
     * @param {number} taskId 
     * @param {number} userId 
     * @param {number} userToken 
     * @returns {CustomResponse<TaskReportSchedule[]>}
     */
    getReportSchedules(organizationId, taskId, userId, userToken){
    }

    /**
     * delete a report schedule
     * @param {number} organizationId
     * @param {number} taskId
     * @param {number} reportId
     * @param {number} userId
     * @param {string} userToken
     * @returns {CustomResponse<void>}
     */
    deleteReportSchedule(organizationId, taskId, reportId, userId, userToken){
    }

    /**
     * Execute all the pending report for one organization
     * @param {number} organizationId 
     */
    executeScheduledReport(organizationId){
    }
}

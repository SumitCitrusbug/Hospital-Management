/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication and registration
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 username:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
// --------------------------------

/**
 * @swagger
 * tags:
 *   name: Doctor
 *   description: Doctor management
 */

/**
 * @swagger
 * /doctor/create:
 *   post:
 *     summary: Create a new doctor
 *     tags: [Doctor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               specialization:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doctor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 doctor:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     specialization:
 *                       type: string
 *                     contactNumber:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /doctor/getall:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: Doctors fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 doctor:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       specialization:
 *                         type: string
 *                       contactNumber:
 *                         type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /doctor/update/{id}:
 *   put:
 *     summary: Update a doctor
 *     tags: [Doctor]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the doctor to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               specialization:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: Doctor updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 doctor:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     specialization:
 *                       type: string
 *                     contactNumber:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /doctor/delete/{id}:
 *   delete:
 *     summary: Delete a doctor
 *     tags: [Doctor]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the doctor to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor deleted successfully
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Internal server error
 */
// --------------------------------

/**
 * @swagger
 * tags:
 *   name: Patient
 *   description: Patient management
 */

/**
 * @swagger
 * /patient/create:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Patient created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 patient:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     dateOfBirth:
 *                       type: string
 *                       format: date
 *                     gender:
 *                       type: string
 *                     contactNumber:
 *                       type: string
 *                     address:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /patient/getall:
 *   get:
 *     summary: Get all patients
 *     tags: [Patient]
 *     responses:
 *       200:
 *         description: Patients fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       address:
 *                         type: string
 *                       gender:
 *                         type: string
 *                       contactNumber:
 *                         type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /patient/update/{id}:
 *   put:
 *     summary: Update a patient
 *     tags: [Patient]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the patient to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 patient:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     dateOfBirth:
 *                       type: string
 *                       format: date
 *                     gender:
 *                       type: string
 *                     contactNumber:
 *                       type: string
 *                     address:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Patient not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /patient/delete/{id}:
 *   delete:
 *     summary: Delete a patient
 *     tags: [Patient]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the patient to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 *       404:
 *         description: Patient not found
 *       500:
 *         description: Internal server error
 */
// --------- Record -----------------------

/**
 * @swagger
 * tags:
 *   name: MedicalRecord
 *   description: Medical record management
 */

/**
 * @swagger
 * /record/create:
 *   post:
 *     summary: Create a new medical record
 *     tags: [MedicalRecord]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recordDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Medical record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 medicalRecord:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     recordDate:
 *                       type: string
 *                       format: date
 *                     description:
 *                       type: string
 *                     patientId:
 *                       type: string
 *                     doctorId:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /record/getall:
 *   get:
 *     summary: Get all medical records
 *     tags: [MedicalRecord]
 *     responses:
 *       200:
 *         description: Medical records fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 medicalRecord:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       recordDate:
 *                         type: string
 *                         format: date
 *                       description:
 *                         type: string
 *                       patientId:
 *                         type: string
 *                       doctorId:
 *                         type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /record/get/{id}:
 *   get:
 *     summary: Get a medical record by ID
 *     tags: [MedicalRecord]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the medical record to fetch
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Medical record fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 medicalRecord:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     recordDate:
 *                       type: string
 *                       format: date
 *                     description:
 *                       type: string
 *                     patientId:
 *                       type: string
 *                     doctorId:
 *                       type: string
 *       404:
 *         description: Medical record not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /record/update/{id}:
 *   put:
 *     summary: Update a medical record
 *     tags: [MedicalRecord]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the medical record to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recordDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *               patientId:
 *                 type: string
 *               doctorId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Medical record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 medicalRecord:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     recordDate:
 *                       type: string
 *                       format: date
 *                     description:
 *                       type: string
 *                     patientId:
 *                       type: string
 *                     doctorId:
 *                       type: string
 *       400:
 *         description: Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Medical record not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /record/delete/{id}:
 *   delete:
 *     summary: Delete a medical record
 *     tags: [MedicalRecord]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the medical record to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Medical record deleted successfully
 *       404:
 *         description: Medical record not found
 *       500:
 *         description: Internal server error
 */

import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError, handleError } from "../../errors/appErro";
import {  Iusermail } from "../../interfaces/user";
import * as crypto from "crypto";
import * as bycript from "bcrypt"
import * as nodemailer from 'nodemailer'


export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email }: Iusermail = req.body;

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find((user) => user.email === email)

    const transport = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'kenzieMotorsGrupo13@hotmail.com',
        pass: 'organiza23#'
      }
    });

    const newPassword = crypto.randomBytes(4).toString('hex')


    if (!account) {
      throw new AppError(403, "email not registered")
    }

    transport.sendMail({
      from: 'Kenzie Motors<kenzieMotorsGrupo13@hotmail.com>',
      to: email,
      subject: 'Recuperação de senha Kenzie Motors!',
      html: `<p>Olá, sua nova senha é: ${newPassword}</p><br/> <a href='http://localhost:5173//login'>Retornar para página de Login</a>`,
      text: '',
    }).then(
      () => {
        bycript.hash(newPassword, 8).then(
          password => {
            AppDataSource.getRepository(User).update(account.id, { password }
            ).then(
              () => {
                return res.status(200).json({ message: 'Email enviado com sucesso' })
              }
            ).catch(
              (err) => {
                return res.status(404).json({ message: 'Usuário não encontrado', err })
              })
          }
        ).catch((err) => console.log('Erro a enviar email', err))
      }
    ).catch((err) => console.log('Usuário não encontrado', err))




  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
};
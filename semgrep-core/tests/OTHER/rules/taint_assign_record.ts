const pug = require('pug')

module.exports = function foo () {
  return (req: Request, res: Response, next: NextFunction) => {
    models.User.findByPk(req.user.id).then((user: User) => {
      let { username } = user.dataValues;
      template = template.replace(/_username_/g, username)
      //ruleid: test
      const fn = pug.compile(template);
      res.send(fn(user.dataValues))
    })
  }
}

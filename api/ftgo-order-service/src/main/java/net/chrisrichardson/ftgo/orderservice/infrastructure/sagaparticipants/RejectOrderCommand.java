package net.chrisrichardson.ftgo.orderservice.infrastructure.sagaparticipants;

public class RejectOrderCommand extends OrderCommand {

  private RejectOrderCommand() {
  }

  public RejectOrderCommand(long orderId) {
    super(orderId);
  }
}
